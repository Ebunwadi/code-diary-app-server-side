import CodeDocs from "../models/codeDocModel.js"


export const getCodeDocs = async (req, res) => {
    const codeData = await CodeDocs.find({ user_id: req.user._id })
    res.json({data: codeData})
}

export const createCodeDocs = async (req, res) => {
    const {day, description, date} = req.body;

    const codeDocs = new CodeDocs({
        day,
        description,
        date,
        user_id: req.user._id
    })

    await codeDocs.save()
    res.json({message: 'saved'})
}

export const deleteCodeDocs = async(req, res) => {
    await CodeDocs.deleteOne({_id: req.params.id})
    res.json({message: 'success'})
}

export const updateCodeDocs = async(req, res) => {
    await CodeDocs.updateOne({_id: req.params.id}, {$set: req.body})
    res.json({message: 'success'})
}




