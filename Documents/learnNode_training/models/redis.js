const client=require('client');

const getUserRedis = (id) => {
    return redis.get(id);
  };
  const setUserRedis = (userid, user) => {
    return redis.set(`${userid}`, JSON.stringify(user));
  };