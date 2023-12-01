const { Assert } = require("../utility");
const { ObjectId } = require("mongoose").Types;

const TicketController = {
    async createTicket(req, res, { Ticket }) {
        const ticket = new Ticket(req.body);
        const { userId } = req.body;

        console.log(req.jwt);

        Assert.authorizedUserId(userId, req.jwt);

        ticket.postedBy = new ObjectId(userId);

        console.log(ticket);

        return await ticket.save();
    },
    async getTickets(req, res, { Ticket }) {
        let { title: partialTicketTitle , userId } = req.query;

        //console.log(userId);
        //console.log(req.jwt);
        Assert.authorizedUserId(userId, req.jwt);

        // if requesting all tickets, ensure they're an admin
        let filter = {};
        if (!req.jwt.isAdmin) {
            // if not an admin, filter only tickets posted by self
            filter = { 
                postedBy: userId
            };
        }

        if (partialTicketTitle) {
            const tickets = await Ticket.find({
                title: { $regex: new RegExp(partialTicketTitle), $options: "i" },
                ...filter
            });
            return tickets;
        } else {
            const tickets = await Ticket.find({
                ...filter
            });
            return tickets;
        }
    },
    async getTicketById(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findById(id);

        Assert.ticketExists(ticket);

        return ticket;
    },
    async updateTicket(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });

        Assert.ticketExists(ticket);

        return ticket;
    },
    async deleteTicket(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findByIdAndDelete(id);

        Assert.ticketExists(ticket);

        return ticket;
    },
    async deleteAllTickets(req, res, { Ticket }) {
        const tickets = await Ticket.deleteMany();
        return tickets;
    }
};

module.exports = TicketController;
