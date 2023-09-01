// src/components/Logs.js
import React, { useEffect, useState } from 'react';
import { getLogs } from '../api';

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const logsData = await getLogs();
        setLogs(logsData);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    }
    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Logs</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>IP Address</th>
            <th>Level</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.ip}</td>
              <td>{log.level}</td>
              <td>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
