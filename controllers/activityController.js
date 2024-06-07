

class ActivityController {
    static async createActivity(req, res) {
        try {
            console.log('this is from activities');
        } catch (error) {
            console.log(error);
        }
    }
    static async viewActivity(req, res) {
        try {
            res.status(200).json({message: 'this is get activities'});
        } catch (error) {
            res.status(500).json({message: "internal server error"})
        }
    }
}


module.exports = ActivityController;