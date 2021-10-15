let summaryItems = 1;
module.exports = {
    realtime: {
        transform: (data) => {
            return data;
        }
    },
    summary: {
        transform: (data) => {
            return "Total Items:" + summaryItems++;
        }
    },
    historical: {
        transform: (data) => {
            let now = new Date();
            return now.toTimeString() + ">" + data;
        }
    }
}
