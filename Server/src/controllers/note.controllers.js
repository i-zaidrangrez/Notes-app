import notesModel from "../models/note.model.js";

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const owner = req.user._id;
    if (!title || !content) {
      return res.status(400).json({
        message: "title and Content is required",
      });
    }

    const note = await notesModel.create({
      title,
      content,
      owner,
    });
    return res.status(201).json({
      message: "Note Created SuccessFully",
      note,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
}

export async function getNotes(req, res) {
  try {
    const user = req.user._id;
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const notes = await notesModel.find({ owner: user });
    if (notes.length === 0) {
      return res.status(404).json({
        message: "No Notes Found",
      });
    }

    return res.status(200).json({
      message: "Notes Fetched SuccessFully",
      notes,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something Went Wrong",
    });
  }
}

export async function getNoteById(req, res) {
  try {
    const userId = req.user._id;
    const paramId = req.params.id;

    const note = await notesModel.findOne({
      _id: paramId,
      owner: userId,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note Doesn't Exist",
      });
    }

    if (note.owner.toString() !== userId.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return res.status(200).json({
      message: "Note Fetched",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
}

export async function updateNote(req,res) {
  try {
    const userId = req.user._id;
    const paramId = req.params.id;
    const { title, content } = req.body;
    const updatedData = {}
    if(title){
        updatedData.title = title
    }
    if(content){
        updatedData.content = content
    }
    if(Object.keys(updatedData).length === 0){
       return res.status(400).json({
            message : "Please Provide Data to Update"
        })
    }

    const note = await notesModel.findOneAndUpdate(
      {
        _id : paramId,
        owner: userId,
      },updatedData,{
        new : true
      }
    );
    if (!note) {
      return res.status(404).json({
        message: "No Notes Found",
      });
    }

    return res.status(200).json({
      message: "Note Updated SuccessFully",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export async function deleteNote(req,res) {
    try {
        const userId = req.user._id
        const paramId = req.params.id

        const note = await notesModel.findOneAndDelete({_id : paramId,owner: userId})
        if(!note){
            return res.status(404).json({
                message : "No Notes Found"
            })
        }
        return res.status(200).json({
            message : "Note Deleted Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong"
        })
    }
}