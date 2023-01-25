Feature('Api User Swagger');

Scenario('Performing different user operation:- CRUD', async ({ I }) => {
  const payload = {
    id: 10,
    username: 'User1',
    firstName: 'Wasey',
    lastName: 'Saeed',
    email: 'wasey@gmail.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };
  const updatePayload = {
    id: 10,
    username: 'WASEY UPDATED USERNAME',
    firstName: 'Wasey',
    lastName: 'Saeed',
    email: 'wasey@gmail.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };

  const header = { 'Content-Type': 'application/json' };

  //CREATE USER
  const createUser = await I.sendPostRequest('/api/v3/user', payload, header);
  I.seeResponseCodeIs(200);
  console.log(createUser);
  const userName = createUser.data.username;

  //GET USER
  const getUser = await I.sendGetRequest(`/api/v3/user/${userName}`, header);
  I.seeResponseCodeIs(200);
  console.log(getUser);

  // UPDATE USER
  const updateUser = await I.sendPutRequest(`/api/v3/user/${userName}`, updatePayload, header);
  I.seeResponseCodeIs(200);
  console.log(updateUser);
  const updatedUserName = updateUser.data.username;

  // GET UPDATED USER
  const getUpdatedUser = await I.sendGetRequest(`/api/v3/user/${updatedUserName}`, header);
  I.seeResponseCodeIs(200);
  console.log(getUpdatedUser);

  // DELETE USER
  await I.sendDeleteRequest(`/api/v3/user/${updatedUserName}`, header);
  I.seeResponseCodeIs(200);

  // GET DELETED USER
  await I.sendGetRequest(`/api/v3/user/${updatedUserName}`, header);
  I.seeResponseCodeIs(404);
});
