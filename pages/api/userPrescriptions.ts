import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Prescription } from "@/models/prescription";
import savedPrescriptions from "./savedPrescriptions.json";

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
    const { prescriptionToSave } = req.body;
    const filePath = path.resolve("./savedPrescriptions.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ name: "Error", message: "Error reading file." });
      }

      let savedPrescriptionList = JSON.parse(data);
      const prescriptionIndex = savedPrescriptionList.findIndex(
        (prescription: Prescription) =>
          prescription.id === prescriptionToSave.id
      );

      if (prescriptionIndex > -1) {
        savedPrescriptionList.splice(prescriptionIndex, 1);
      } else {
        savedPrescriptionList.push(prescriptionToSave);
      }

      fs.writeFile(
        filePath,
        JSON.stringify(savedPrescriptionList, null, 2),
        "utf8",
        (err) => {
          if (err) {
            return res
              .status(500)
              .json({ name: "Error", message: "Error writing to file." });
          }
          return res.status(200).json({
            name: "Success",
            message: "Saved prescription list successfully updated.",
          });
        }
      );
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({ data: savedPrescriptions });
  }
}
