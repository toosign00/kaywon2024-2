const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
});

//@desc Get all contacts
//@route Post /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {
        name,
        email,
        phone
    } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).send("Create Contacts");
});

//@desc Get a contact by name or ID
//@route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const param = req.params.id; // req.params.id를 param 변수에 할당
    let contact;

    // ID가 MongoDB ObjectId 형식인지 확인
    if (param.match(/^[0-9a-fA-F]{24}$/)) {
        // ID로 검색
        contact = await Contact.findById(param);
    } else {
        // 이름으로 검색
        contact = await Contact.findOne({ name: param });
    }

    if (!contact) {
        return res.status(404).json({ message: "Contact not found" }); // 연락처가 없으면 404 응답
    }

    res.status(200).json(contact); // 연락처 반환
});

//@desc Get all contacts
//@route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {
        name,
        email,
        phone
    } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        id, {
            name,
            email,
            phone
        },
        { new: true }
    );

    res.status(200).send(updatedContact);
});

//@desc Get all contacts
//@route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
});

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};