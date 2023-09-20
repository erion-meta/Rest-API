import mongoose, { mongo } from "mongoose";
import { ContactSchema } from "../models/apiModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body); // Pass individual properties of the contact, not req.body itself

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    res.status(500).json({ error: "Error saving contact" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contacts" });
  }
};

export const getContactWithID = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactID);
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contacts" });
  }
};

export const updateContact = async (req, res) => {
  try {
    const contacts = await Contact.findOneAndUpdate(
      {
        _id: req.params.contactID,
      },
      req.body,
      { new: true }
    );
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contacts" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({
      _id: req.params.contactID,
    });

    if (result.deletedCount === 1) {
      res.json({ message: "Successfully deleted contact" });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting contact" });
  }
};
