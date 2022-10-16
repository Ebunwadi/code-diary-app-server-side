import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect(process.env.CONNECT_MONGODB)
}

export default connect