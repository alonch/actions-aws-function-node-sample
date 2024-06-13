exports.handler = async (event, context) => {
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*"
        },
        "body": "hello world"
    }
}