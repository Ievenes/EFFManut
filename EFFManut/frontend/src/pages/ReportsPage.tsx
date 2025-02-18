import { Download } from 'lucide-react';
import React from 'react';

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Request Statistics</h3>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div>
                <dt className="text-sm font-medium text-gray-500">Total Requests</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">127</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Avg. Resolution Time</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">2.5d</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Completion Rate</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">94%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Active Technicians</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">8</dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Priority Distribution</h3>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">High</span>
                  <span className="text-sm font-medium text-gray-900">15%</span>
                </div>
                <div className="mt-1">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 rounded-full h-2" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Medium</span>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="mt-1">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 rounded-full h-2" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Low</span>
                  <span className="text-sm font-medium text-gray-900">40%</span>
                </div>
                <div className="mt-1">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}