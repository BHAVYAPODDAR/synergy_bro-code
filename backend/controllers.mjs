// import firebase from 'firebase/compat/app'; // Import the 'compat' version for backward compatibility
// import "firebase/compat/database"; // Import the 'compat' version for backward compatibility
import admin from "firebase-admin";

export const userData = async (req, res) => {
  try {
    const { email } = req.body; // Extract 'name' and 'email' from the request body

    const user = {
      email: email,
      balance: 10000,
    };

    const db = admin.firestore();
    const collectionRef = db.collection("user"); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(user);

    res.json({ message: "Data inserted successfully!", docId: docRef.id });
  } catch (error) {
    console.error("Error inserting data into Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const transaction = async (req, res) => {
  try {
    const { uuid, amount, date_Time, recEmail, senderEmail } = req.body; // Extract 'name' and 'email' from the request body

    const transaction_data = {
      uuid: uuid,
      amount: amount,
      date_Time: date_Time,
      recEmail: recEmail,
      senderEmail: senderEmail,
    };

    const db = admin.firestore();
    const collectionRef = db.collection("transaction"); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(transaction_data);

    res.json({ message: "Data inserted successfully!", docId: docRef.id });
  } catch (error) {
    console.error("Error inserting data into Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTransactionData = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("transaction");

    // Query Firestore based on the 'recEmail' field
    const recData = await usersRef.where("recEmail", "==", email).get();

    // Query Firestore based on the 'senderEmail' field
    const senderData = await usersRef.where("senderEmail", "==", email).get();

    // Combine data from both queries into an array
    const data = [];

    if (!recData.empty) {
      data.push(...recData.docs.map((doc) => doc.data()));
    }

    if (!senderData.empty) {
      data.push(...senderData.docs.map((doc) => doc.data()));
    }

    if (data.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(data);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserSoil = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("userSoilData");

    // Query Firestore based on the 'recEmail' field
    const soilData = await usersRef.where("email", "==", email).get();

    if (soilData.empty) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(soilData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getLoanData = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("loanRequest");

    const querySnapshot = await usersRef.where("email", "!=", email).get();

    if (querySnapshot.empty) {
      return res.status(404).json({ error: "No data found." });
    }

    // Extract data from all documents
    const allUserData = querySnapshot.docs.map((doc) => doc.data());

    res.json(allUserData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("loanRequest");

    const querySnapshot = await usersRef.where("email", "==", email).get();

    if (querySnapshot.empty) {
      return res.status(404).json({ error: "No data found." });
    }

    // Extract data from all documents
    const allUserData = querySnapshot.docs.map((doc) => doc.data());

    res.json(allUserData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
