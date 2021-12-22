class Media{
    constructor(name,author,genre,date){
        this.author=author
        this.genre=genre
        this.date=date
        this.name
    }

}
class Movie extends Media{
    constructor(name,author,genre,date,director,superStar){
        super(name,author,genre,date)
        this.director=director
        this.superStar=superStar
    }

}
class book extends Media{
    constructor(name,author,genre,date,pages,country){
        super(name,author,genre,date)
        this.pages=pages
        this.country=country
    }

}
 const oneDay=new Movie("one day","David Nicholls","romantic",2011,"Lone Scherfig","Anne Hathaway")
 console.log(oneDay);
 const TheFourAgreements=new book("The Four Agreements","Don Miguel Ruiz"," Body + Mind + Spirit",1997,138,"United States")
 console.log(TheFourAgreements);