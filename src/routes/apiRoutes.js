import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/apiController";

const routes = (app) => {
  app
    .route("/contact")

    //get all contacts
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    //post a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactID")

    //get specific contact with ID
    .get(getContactWithID)

    //update a contact
    .put(updateContact)

    //delete a contact
    .delete(deleteContact);
};

export default routes;
