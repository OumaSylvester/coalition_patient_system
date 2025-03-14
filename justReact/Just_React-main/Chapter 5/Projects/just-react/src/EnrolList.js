import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useEffect } from "react";
// Columns for the detail list.
const columns = [
  {
    key: "edit",
    name: "Edit",
    fieldName: "edit",
    minWidth: 30,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "delete",
    name: "Delete",
    fieldName: "delete",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
];

// Test tems
let items = [];

const EnrolList = (props) => {
  useEffect(() => {
    if (props.action === "edit") {
      const currentItem = items.filter(
        (item) => item.key === props.selectedItemId
      )[0];
      props.setSelectedProgram(currentItem.program);      
    }
  }, [props.selectedItemId]);


  useEffect(() => {
    // Execute deletion on the selected item.
    if (props.action === "delete") {
      // filter the selected item
      const deleteItem = items.filter(
        (item) => item.key === props.selectedItemId
      )[0];
      // Remove from the list
      items = items.filter((item) => item !== deleteItem);

      // update seats
      props.restoreSeats(deleteItem.program);
    }
    // Update the list items with the student details after rendering
    const curItemKey = props.studentDetails.key;
    if (curItemKey) {
      const i = items.findIndex((item) => item.key === curItemKey);
      if (i > -1) {
        items = items.map((item) =>
          item.key === curItemKey ? props.studentDetails : item
        );

      } else {
        items = [...items, props.studentDetails];
      }

      props.studentDetails.program = props.chosenProgram; 
      props.setUpdatedSeats(props.currentSeats - 1); //Bug: what is the program does not change
      //it still reduces the seats count for the program. 
      //Restucture this to get the logic right.
      props.setStudentDetails({});
    }
  }, [props]);

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};
export default EnrolList;
