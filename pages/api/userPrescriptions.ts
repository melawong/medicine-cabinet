import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Prescription } from "@/models/prescription";
import savedPrescriptions from "../../mockDatabase/savedPrescriptions.json";

type Data = {
  name?: string;
  message?: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { prescriptionToAddOrRemove } = req.body;
    let savedPrescriptionList: Prescription[] = [];

    fs.readFile(
      "./mockDatabase/savedPrescriptions.json",
      "utf8",
      (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ name: "Error", message: "Error reading file." });
        }

        savedPrescriptionList = JSON.parse(data);

        const prescriptionIndex = savedPrescriptionList.findIndex(
          (prescription: Prescription) =>
            prescription.id === prescriptionToAddOrRemove.id
        );

        if (prescriptionIndex > -1) {
          savedPrescriptionList.splice(prescriptionIndex, 1);
        } else {
          savedPrescriptionList.push(prescriptionToAddOrRemove);
        }

        fs.writeFile(
          "./mockDatabase/savedPrescriptions.json",
          JSON.stringify(savedPrescriptionList),
          "utf8",
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({ name: "Error", message: "Error writing to file." });
            }
          }
        );
      }
    );
    return res.status(200).json({
      name: "Success",
      message: "Saved prescription list successfully updated.",
      data: savedPrescriptionList,
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ data: savedPrescriptions });
  }
}
