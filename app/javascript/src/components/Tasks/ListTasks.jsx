import React from "react";
import Table from "./Table";

const ListTasks = ({ data, destroyTask, updateTask, showTask }) => {
  return <Table data={data} showTask={showTask} updateTask={updateTask} />;
};

export default ListTasks;
