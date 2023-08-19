import {birdData} from './BirdData'

 const feedData=[
    {
        name:"Anna",
        title:"Nesting Alert",
        time: "now",
        // description:`${this.name} were spotted at 'Sunset Cove Nature Reserve,' possibly searching for suitable breeding sites.`,
        //  image: birdData[1].image,
        status:"Nesting"
        
    },{
        name:"Betty",
        title:"Migrartion Alert",
        time: "30 mins ago",
        // description:"Betty were moving along the 'Avian Migration Route,' possibly heading south for the winter.",
        // image: birdData[0].image,
        status:"Migrating"
    },{
        name:"Kitty",
        title:"Riverside-Alert",
        time: "2 hour ago",
        // description:"Betty were near “Tranquil River”, likely searching for water and food resources.",
        // image: birdData[0].image,
        status:"Riverside"
    },{
        name:"Amanda",
        title:"Forest Canopy",
        time: "a day ago",
        // description:"Anna were observed high in the canopy of “Whispering Woods”, potentially seeking safety from predators.",
        image: birdData[1].image,
        status:"Forest"
    },{
        name:"Jess",
        title:"Exploring Island",
        time:"2 days ago",
        // description:`${name} were on “Paradise Isle”, possibly exploring new territories.`,
        // image: birdData[4].image,
        status :"Exploring"
    },{
        name:"Betty",
        title:"Resting",
        time:"2 days ago",
        // description:"Betty were resting at “Sunset Cove Nature Reserve”, possibly seeking safety from predators.",
        // image: birdData[0].image,
        status:"Resting"
    }
]

export const FeedData = feedData.map(item => ({
    ...item,
    description: `${item.name} was ${item.status === 'Nesting' ? 'spotted at' : 'moving along the'} '${item.status === 'Nesting' ? 'Sunset Cove Nature Reserve' : 'Avian Migration Route'},' possibly ${item.status === 'Nesting' ? 'searching for suitable breeding sites' : 'heading south for the winter'}.`,
    image: birdData.find(bird => bird.name === item.name)?.image,
}));