import Mock from "mockjs";
Mock.mock('/api/user', 'get', {
    code: 200,
    message: 'success',
    data: {
      name: '@name',
      age: '@integer(18, 60)',
      email: '@email',
      address: '@county(true)'
    }
  });