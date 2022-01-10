const { GET, POST } = require("./request");


export const getWallet = async (tc) => {
    const url = `https://bisikletimolsun.xyz/api/wallet/${tc}`;
    const response = await GET(url);
    const { success } = response;

    if (success)
        return response.data;
    return false;
}