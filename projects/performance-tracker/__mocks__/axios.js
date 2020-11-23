const axiosMock = jest.genMockFromModule('axios');

let mockResponse = { data:{
    "objective":"my mock objective"
}}
axiosMock.get.mockImplemetation(req);

req =()=>{
    return new Promise((resolve)=>{
        axiosMock.delayTimer = setTimeout(()=>{
            resolve(mockResponse);
        }, 1000)

    });
} 

module.exports = axiosMock;