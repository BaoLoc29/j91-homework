import React from 'react';

const TotalUser = ({ users }) => {
  const totalUsers = users.length;
  const totalAge = users.reduce((total, user) => total + user.age, 0);
  const totalMale = users.filter((user) => user.gender === 'male').length;
  const totalFemale = users.filter((user) => user.gender === 'female').length;

  return (
    
    <div>
      <p>Total Users: {totalUsers}</p>
      <p>Total Age: {totalAge}</p>
      <p>Total Male: {totalMale}</p>
      <p>Total Female: {totalFemale}</p>
    </div>
  );
};

export default TotalUser;
