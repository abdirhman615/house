const app = require("../index")
const request = require("supertest");

// describe("testing users get , post ,delete,updete",()=>{
//  it("get testing users waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/user");

//         expect(resp.statusCode).toBe(200)
// });
// it("post testing users waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response = await request(app).post("/user").send({
//         name:"Abdirhman",
//         username:"abdirhman@gmail.com",
//         Password:"123",
//         role:"admin"
//     })
//     expect(response.statusCode).toBe(200);  
// });
// it("PUT testing users waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/user/6495a25f30dbcc557aa6b772").send({
//         name:"ali",
//         Email:"ali@gmail.com",
//         Password:"123",
//         userStatus:"active",
//         role:"block"
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing users waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/user/6495a25f30dbcc557aa6b772")
//     expect(response.statusCode).toBe(200); 
// });
// })


// describe("testing guryaha get , post ,delete,updete",()=>{
//  it("get testing guryaha waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/guryah");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing guryah waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).post("/guryah").send({
       
//         typekisa:"dabaq",
//         area:"bakaro",
//         address:"Banader",
//         age:"bakaro",
//         rent:"350",
//         deposit:"150",
//         parking:"active",
//         imagesPreview:"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
//         isAvalibile:"yes",
//         rooms:"6",
//         musqulaha:"2",
//         masterRoom:"1",
//         faahfaahin:"goob ganacsi",
//         users_id:"6490a78e19a6ebca05e8fe17"
//     })

//     expect(response.statusCode).toBe(200);    
// });
// it("PUT testing guryah waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/guryah/649146ca3056a569ff3bfb91").send({
//         typekisa:"dabaq",
//          area:"bakaro",
//          address:"Banader",
//          age:"bakaro",
//          rent:"350",
//          deposit:"150",
//          parking:"active",
//          imagesPreview:"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
//          isAvalibile:"yes",
//          rooms:"6",
//          musqulaha:"2",
//          masterRoom:"1",
//          faahfaahin:"goob waxbarasho",
//          users_id:"6490a78e19a6ebca05e8fe17"
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing guryah waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/guryah/649146ca3056a569ff3bfb91")
//     expect(response.statusCode).toBe(200); 
// });
// })


// describe("testing images get , post ,delete,updete",()=>{
//  it("get testing images waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/images");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).post("/images").send({
       
//         guryaha_id:"64946a694627591a69c7833f"
//     })

//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/images/649147645d744cb4d118a0f8").send({
//         guryaha_id:"64946a694627591a69c7833f"
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/images/649147645d744cb4d118a0f8")
//     expect(response.statusCode).toBe(200); 
// });
// })

// describe("testing homestitng get , post ,delete,updete",()=>{
//     it("get testing homestitng waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/homestiting");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).post("/homestiting").send({
//         Title:"test",
//         Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//         Name:"test",
//         address:"bakaro",
//         email:"test@gmail.com",
//         phone:"0615555555",
//         whatapp:"https://wa.me/252613777303",
//         Facebook:"https://wa.me/252613777303",
//         Instagram:"https://wa.me/252613777303",
//         tiktok:"https://wa.me/252613777303",
//         Herotitle:"test",
//         HeroDiscritpion:"test",
//         HerImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//         Footertext:"Footer test"
//     })

//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/homestiting/649473526b2ba1b95b534710").send({
//     Title:"test",
//     Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//     Name:"test",
//     address:"bakaro",
//     email:"test@gmail.com",
//     phone:"06100000000",
//     whatapp:"https://wa.me/252613777303",
//     Facebook:"https://wa.me/252613777303",
//     Instagram:"https://wa.me/252613777303",
//     tiktok:"https://wa.me/252613777303",
//     Herotitle:"test",
//     HeroDiscritpion:"test",
//     HerImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//     Footertext:"Footer test"
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/homestiting/649473526b2ba1b95b534710")
//     expect(response.statusCode).toBe(200); 
// });
// })

// describe("testing image_gallary get , post ,delete,updete",()=>{
// it("get testing image_gallary waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/Image_gallary");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).post("/Image_gallary").send({
//         img_title:"React_img",
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s"
        
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/Image_gallary/649478337bb26fd0297b6897").send({
//     img_title:"React_img",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s"
        
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/Image_gallary/649478337bb26fd0297b6897")
//     expect(response.statusCode).toBe(200); 
// });
// })



// describe("testing Out_Client get , post ,delete,updete",()=>{
// it("get testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/Out_Client");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).post("/Out_Client").send({
//         name:"Client_img",
//         clientlogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iFfHdeZC6jOrZHULmVS7ZBbN5dVEUxyLHYD8MMoB&s"
//     })

//     expect(response.statusCode).toBe(200);

// });
// it("PUT testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).put("/Out_Client/64947bbe3aaf2ac4a78ddbb6").send({
//         name:"Client_img",
//         clientlogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iFfHdeZC6jOrZHULmVS7ZBbN5dVEUxyLHYD8MMoB&s"
//     })
//     expect(response.statusCode).toBe(200); 
// });
// it("delete testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(app).delete("/Out_Client/64947bbe3aaf2ac4a78ddbb6")
//     expect(response.statusCode).toBe(200); 
// });
// })

// describe("testing Service get , post ,delete,updete",()=>{
//     it("get testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/Service");

//         expect(resp.statusCode).toBe(200)
// });
//     it("Post testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).post("/Service").send({
//             title:"SIU",
//             description:"Somali Univarcty",
//             icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7fJt6QWPcNOZNonCg-p_2vNle9_O6WRg4mWu4vIktg&s"
//         })
//         expect(response.statusCode).toBe(200); 
// });
// it("PUT testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).put("/Service/64947e61a895b2228448f31d").send({
//             title:"SIUO",
//             description:"Somali Univarcty",
//             icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7fJt6QWPcNOZNonCg-p_2vNle9_O6WRg4mWu4vIktg&s"
//         })
//         expect(response.statusCode).toBe(200); 
// });
//     it("delete testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).delete("/Service/64947e61a895b2228448f31d")
//         expect(response.statusCode).toBe(200); 
// });
// })


// describe("testing contect get , post ,delete,updete",()=>{
//     it("get testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(app).get("/contect");

//         expect(resp.statusCode).toBe(200)
// });
//     it("Post testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).post("/contect").send({
//             name:"xasan",
//             phone:"0614444444",
//             massage:"wuu ficanyahey"
//         })
//         expect(response.statusCode).toBe(200); 
// });
// it("PUT testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).put("/contect/6495e970b5eab0e01a2eec4f").send({
//             name:"xasan",
//             phone:"0614444444",
//             massage:"zaid u ficanyahey"  
//         })
//         expect(response.statusCode).toBe(200); 
// });
//     it("delete testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(app).delete("/contect/6495e970b5eab0e01a2eec4f")
//         expect(response.statusCode).toBe(200); 
// });
// })