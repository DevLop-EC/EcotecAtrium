import axios from 'axios';
import AppLayout from 'components/Layouts/AppLayout';
import { useEffect } from 'react';

const Dashboard = () => (
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/users')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
      });
  }),
  (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
);

export default Dashboard;
