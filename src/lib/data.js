  
  
  
  
  export const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    const category = await data.data
    return category.news_category

}
export const getNewsByCategoryId = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    return data.data

}
export const getNewsDetailsById = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data = await res.json()
    return data.data[0];

}