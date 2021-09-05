const dummy = (blogs)=>{
    return 1
}
const totalLikes=(blogs)=>{
    return blogs.reduce((initiallike,blogs)=>(initiallike +=blogs.likes),0)
}
module.exports={
    dummy,
    totalLikes
}