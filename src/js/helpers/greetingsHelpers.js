export function getGreetingByTime()
{
  let greeting, date = new Date(), hour = date.getHours();

  if(hour < 12)
  {
    greeting = 'morning';
  }

  else if(hour >12 && hour < 17)
  {
    greeting = 'afternoon';
  }

  else
  {
    greeting = 'evening';
  }

  return greeting;
}
