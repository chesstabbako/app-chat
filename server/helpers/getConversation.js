const { ConversationModel } = require("../models/ConversationModel")

const getConversation = async(currentUserId)=>{
    if(currentUserId){
        const currentUserConversation = await ConversationModel.find().sort({  updatedAt : -1 }).populate('messages').populate('sender')

        const conversation = currentUserConversation.map((conv)=>{
            const countUnseenMsg = conv?.messages?.reduce((preve,curr) => {
                const msgByUserId = curr?.msgByUserId?.toString()

                if(msgByUserId !== currentUserId){
                    return  preve + (curr?.seen ? 0 : 1)
                }else{
                    return preve
                }
             
            },0)
            
            return{
                _id : conv?._id,
                sender : conv?.sender,
                unseenMsg : countUnseenMsg,
                lastMsg : conv.messages[conv?.messages?.length - 1], 
                allMsgs: conv.messages
            }
        })

        return conversation
    }else{
        return []
    }
}

module.exports = getConversation