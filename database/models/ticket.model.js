const { model, Schema } = require('mongoose');

const ticketSchema = new Schema({
    title: { type: String, trim: true, required: 'Title is required' },
    description: { type: String, trim: true, required: 'Description is required'},
    status: {
        type: String,
        default: 'open',
        enum: ['open', 'inprogress', 'closed']
    },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    postedBy: { type: Schema.ObjectId, ref: 'users' },
    urgency: {
        type: String,
        default: 'low',
        enum: ['low', 'medium', 'high']
    }
});

const Ticket = model('tickets', ticketSchema);
module.exports = Ticket;