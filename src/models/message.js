/**
 * Message Model 
 * Derived from: https://schema.org/Message
 * 
 * Schema:
 *   id: String
 *   dateSent: Date
 *   dateRead: Date
 *   recepient: Relation
 *   sender: Relation
 *   title: String
 *   text - String
 */

const Message = (function createMessageFactory() {
    let messagePrototype = {
        id: null,
        title: null,
        dateSent: null,
        dateRead: null,
        recepient: null,
        sender: null,
        isViewModel: true
    };

    return function(message) {
        let newMessage = Object.create(messagePrototype);
        Object.assign(newMessage, message);

        return newMessage;
    };
})();

export default Message;

//  let todo = Todo({id : 1, title: "This is a title", userName: "Cristi", completed: false });