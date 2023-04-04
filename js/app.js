let tweets = [
  { tweet: "This is my first tweet!", username: "user1", created_at: "03-23-2022", age: 25 },
  { tweet: "Enjoying a sunny day!", username: "user2", created_at: "04-01-2023", age: 17 },
  { tweet: "Learning how to code", username: "user3", created_at: "02-05-2021", age: 19 },
  { tweet: "I love my dog!", username: "user4", created_at: "06-15-2020", age: 16 },
  { tweet: "Celebrating my birthday today!", username: "user5", created_at: "09-12-2022", age: 29 },
  { tweet: "Just got a new job!", username: "user6", created_at: "10-30-2021", age: 24 },
  { tweet: "Watching a movie with friends", username: "user7", created_at: "11-04-2022", age: 15 },
  { tweet: "Traveling to Paris next month!", username: "user8", created_at: "01-14-2023", age: 22 },
  { tweet: "Cooking dinner for the family", username: "user9", created_at: "07-28-2022", age: 35 },
  { tweet: "Playing video games all night", username: "user10", created_at: "08-19-2022", age: 14 },
];

let index = 0;
while (index < tweets.length) {
  if (tweets[index].age >= 18) {
    console.log(`${tweets[index].tweet} - ${tweets[index].username} - ${tweets[index].created_at}`);
  }
  index++;
}

for (let i = 0; i < tweets.length; i++) {
  if (tweets[i].age < 18) {
    console.log(`${tweets[i].tweet} - ${tweets[i].username} - ${tweets[i].created_at}`);
  }
}
