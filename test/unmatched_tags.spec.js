import html from "@candlelib/html";


const result = `
<html>
    <head>
        <link>
            <body>             </body>
        </link>
    </head>
</html>
`;

const tree = html(`
                <!DOCTYPE html>
                <html>
                <head>
                <link>
                <body>
                </html>
            `);

assert(tree.toString() == result);