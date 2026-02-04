class data_struct {
    constructor(id,name,phone,address,total,available,bathroom,price1,price2,pic1,piclist,searchid){
    this.id=id,
    this.name=name,
    this.phone=phone,
    this.address=address,
    this.pic1=pic1,
    this.piclist=piclist,
    this.total=total,
    this.available=available,
    this.bathroom=bathroom,
    this.price1=price1,
    this.price2=price2,
    this.searchid = searchid

}}

class uni_struct {
    constructor(searchId,name){
    this.searchId = searchId,
    this.name = name

}}


export const data = [
    new data_struct("1","Vita Boarding House","+94722449550", "60/55-A, mill road, DS Wijesinghe Rd, Moratuwa",16,5,"Available","25000","16000",
        "https://lh3.googleusercontent.com/p/AF1QipPY0dQDSypt3RQekbM2GtgMAUaaQjmZJLrkg3AA=s1360-w1360-h1020-rw",
        ["https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxLlqT8B67W-IOUb0v92-4bxpNSqoHSPFBCUhTCu5OE77xMgjWc8GEM0ZdKauVdzrF3DLUEl6_fVLFQVJY2MQhRco3faUmLetqEJPoXJB_UuHst93MN8jw0TaHrNc5VjuWKYbx1wFy4lc=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipPHj7kyi-UEWrYx3GpcGoNvBxYiaF-s7h2PlDox=s1360-w1360-h1020-rw"],"Moratuwa"),
    new data_struct("2","Front House Boarding ","+94714868812", "Moratuwa 10400",10,2,"Not Available","30000","20000",
        "https://lh3.googleusercontent.com/p/AF1QipMLTM4gdKjX2TxjavdOr6C5jKsGCraN1Ugl1e1p=s1360-w1360-h1020-rw",
        ["https://lh3.googleusercontent.com/p/AF1QipMKx6_HQn5X2FexqorJpAgktoMKWrUuqSq1XtwK=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipN5fmbTt5Ge_A5i7S_8DO1Xar5iBf7hFEEZi7gK=s1360-w1360-h1020-rw"],"Moratuwa"),
        new data_struct("3","Kelani Boarding House ","074 199 5970", "610/02 Bulugaha Junction, Kandy - Colombo Rd, Kelaniya 11300",10,2,"Not Available","30000","20000",
            "https://lh3.googleusercontent.com/p/AF1QipMczQK8ZnMjtonbHmfi3H3MQweRyb_gK50XjMsT=s1360-w1360-h1020-rw",
            ["https://lh3.googleusercontent.com/p/AF1QipOc77IJkE6yYBx9jKxCpNX725zIRFhggU5rYrEW=s1360-w1360-h1020-rw",
            "https://lh3.googleusercontent.com/p/AF1QipPfTOJx52I59A-MZFxaMxWSi6wbfJcxqu0MlcLQ=s1360-w1360-h1020-rw"],"Kelaniya"),

    

    
]

export const universities = [
    new uni_struct("UOK","University of Kelaniya"),
    new uni_struct("UOM","University of Moratuwa"),
    new uni_struct("UOC","University of Colombo"),
    new uni_struct("UOJ","University of Sri Jayawardhanapura"),
    new uni_struct("UOP","University of Peradeniya"),
    new uni_struct("UVPA","University of the Visual and Performing Arts"),
    new uni_struct("UJA","University of Jaffna"),
    new uni_struct("UoR","University of Ruhuna"),
    new uni_struct("EUSL","Eastern University, Sri Lanka"),
    new uni_struct("SEUSL","South Eastern University of Sri Lanka"),
    new uni_struct("RUSL","Rajarata University of Sri Lanka"),
    new uni_struct("SUSL","Sabaragamuwa University of Sri Lanka"),
    new uni_struct("WUSL","Wayamba University of Sri Lanka"),
    new uni_struct("UWU","Uva Wellassa University of Sri Lanka"),
    new uni_struct("Vavuniya Campus","University of Vavuniya (campus of UoJ)"),
    new uni_struct("code P","Gampaha Wickramarachchi University of Indigenous Medicine"),
    new uni_struct("code N","Institute of Indigenous Medicine"),
    


    

    
]