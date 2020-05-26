import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
  Alert,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //data
      buckets_array: [],
      tasks: {},
      bucketName: "",
      showBucketModal: false,

      //These are task properties.
      name: "",
      description: "",
      rank: "",
      assignees: [],
      assignee: "",
      bucket: "To do",
      start_date: new Date(),
      due_date: new Date(),
      progress: "",
      label_color: "#3797a4",
      priority: "",

      //Modal Show props.
      showAddModal: false,
      editModal: {},
      showEditModal: false,
      showSettings: false,

      //dragging variables.
      draggedCard: null,
      dragOn: false,

      draggedBucket: null,

      autoSave: false,
    };
  }

  autoSaveData() {
    window.localStorage.setItem("autoSave", this.state.autoSave);
    // http://localhost:3001/bucket_array
    this.state.autoSave &&
      axios
        .post(
          "https://kanban-back-end.herokuapp.com/buckets/save",
          Object.assign({}, this.state.buckets_array)
        )
        .then(
          (response) => {
            // console.log(response.data);
          },
          (error) => {
            console.log(error);
            alert("Error. Can not Load Data.");
          }
        );

    this.state.autoSave &&
      axios
        .post(
          "https://kanban-back-end.herokuapp.com/tasks/save",
          this.state.tasks
        )
        .then(
          (response) => {
            // console.log(response.data);
          },
          (error) => {
            console.log(error);
            alert("Error. Can not Load Data.");
          }
        );
  }

  saveData() {
    axios
      .post(
        "https://kanban-back-end.herokuapp.com/buckets/save",
        Object.assign({}, this.state.buckets_array)
      )
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
          alert("Error. Can not Load Data.");
        }
      );

    axios
      .post(
        "https://kanban-back-end.herokuapp.com/tasks/save",
        this.state.tasks
      )
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
          alert("Error. Can not Load Data.");
        }
      );

    this.setState({ showSettings: false });
  }

  componentDidMount() {
    this.setState({
      autoSave:
        window.localStorage.getItem("autoSave") === "true" ? true : false,
    });
    // http://localhost:3001/bucket_array
    axios.get("https://kanban-back-end.herokuapp.com/buckets").then(
      (response) => {
        var arr = Object.values(response.data);
        for (var i in arr) {
          arr[i] = arr[i]["name"];
        }
        // console.log(arr);
        this.setState({ buckets_array: arr });
      },
      (error) => {
        console.log(error);
        // alert("Error. Can not Load Data.");
      }
    );
    // http://localhost:3001/tasks
    axios.get("https://kanban-back-end.herokuapp.com/tasks").then(
      (response) => {
        // console.log(response.data);
        var tasks = response.data;
        for (var i in tasks) {
          tasks[i].start_date = new Date(tasks[i].start_date);
          tasks[i].due_date = new Date(tasks[i].due_date);
        }

        this.setState({ tasks: tasks });
      }
      // (error) => {
      //   console.log(error);
      //   alert("Error. Can not Load Data.");
      // }
    );

    setInterval(() => {
      this.autoSaveData();
    }, 5000);
  }

  // This function is used to add a new task
  addTask() {
    var tasks = this.state.tasks;
    var n = Object.keys(tasks).length + 1;
    var rank = 1;
    // if (this.state.bucket.length === 0) {
    //   var first=this.state.buckets_array[0];
    //   this.setState({ bucket:first });
    // }
    // console.log(this.state.buckets_array[0]);
    for (var i in tasks) {
      if (tasks[i].bucket === this.state.bucket) rank++;
    }
    tasks[n] = {
      id: `${n}`,
      rank: rank,
      bucket: this.state.bucket,
      name: this.state.name,
      description: this.state.description,
      assignees: this.state.assignees,
      start_date: this.state.start_date,
      due_date: this.state.due_date,
      progress: this.state.progress,
      label_color: this.state.label_color,
      priority: this.state.priority,
    };
    console.log(tasks);
    this.setState({
      tasks: tasks,
      showAddModal: false,
      name: "",
      description: "",
      assignees: [],
      assignee: "",
      rank: "",
      bucket: "",
      start_date: new Date(),
      due_date: new Date(),
      progress: "",
      label_color: "#3797a4",
      priority: "",
    });
  }

  editTask(task) {
    this.setState({
      editModal: task,
      name: task.name,
      description: task.description,
      bucket: task.bucket,
      assignees: task.assignees,
      start_date: task.start_date,
      due_date: task.due_date,
      progress: task.progress,
      label_color: task.label_color,
      priority: task.priority,
      showEditModal: true,
    });
  }

  saveEditTask() {
    var temp = this.state.editModal;
    temp["name"] = this.state.name;
    temp["description"] = this.state.description;
    temp["bucket"] = this.state.bucket;
    temp["assignees"] = this.state.assignees;
    temp["start_date"] = this.state.start_date;
    temp["due_date"] = this.state.due_date;
    temp["progress"] = this.state.progress;
    temp["label_color"] = this.state.label_color;
    temp["priority"] = this.state.priority;
    var tasks = this.state.tasks;
    tasks[temp.id] = temp;
    this.setState({ tasks: tasks, showEditModal: false });
    this.setState({
      name: "",
      description: "",
      rank: "",
      bucket: "",
      assignees: [],
      assignee: "",
      start_date: new Date(),
      due_date: new Date(),
      progress: "",
      label_color: "#3797a4",
      priority: "",
    });
  }

  saveBucket(bucket) {
    if (bucket === null) {
      var arr = this.state.buckets_array;
      arr.push(this.state.bucketName);
      this.setState({
        buckets_array: arr,
        showBucketModal: false,
        bucketName: "",
      });
    } else {
      this.setState({ showBucketModal: true, bucketName: bucket });
    }
  }

  dragStart(e, task) {
    this.setState({ draggedCard: task });
  }

  dragEnd(e) {
    this.setState({ draggedCard: null });
  }

  dragOver(e, index) {
    e.preventDefault();
  }

  dropCard(e, index) {
    if (this.state.draggedBucket !== null) {
      var draggedBucket = this.state.draggedBucket;
      var arr = this.state.buckets_array;
      var target = arr[index];
      var target_index = arr.indexOf(target);
      arr = arr.filter(function (ele) {
        return ele !== draggedBucket;
      });
      console.log(arr, target_index);
      arr.splice(target_index, 0, draggedBucket);
      this.setState({ buckets_array: arr });
      return;
    }
    if (this.state.draggedCard.bucket === this.state.buckets_array[index]) {
      return;
    }
    let task = this.state.draggedCard;
    let task_id = task.id;
    let toList = index;
    var tasks = this.state.tasks;
    var bucket = this.state.buckets_array[toList];

    var rank = 1;
    for (var i in tasks) {
      if (tasks[i].bucket === bucket) rank = rank + 1;
    }

    for (i in tasks) {
      if (
        tasks[i].bucket === task.bucket &&
        Number(tasks[i].rank) > Number(task.rank)
      ) {
        tasks[i].rank--;
      }
    }
    tasks[task_id].bucket = this.state.buckets_array[toList];
    tasks[task_id].rank = rank;

    this.setState({ tasks: tasks });
    console.log(tasks);
  }

  dropVertical(e, task) {
    if (this.state.draggedBucket !== null) {
      return;
    }
    if (this.state.draggedCard.bucket !== task.bucket) {
      return;
    }

    var draggedRank = this.state.draggedCard.rank;
    var droppedRank = task.rank;
    var tasks = this.state.tasks;
    if (draggedRank > droppedRank) {
      for (var i in tasks) {
        if (
          tasks[i].bucket === task.bucket &&
          tasks[i].rank >= droppedRank &&
          tasks[i].rank <= draggedRank
        ) {
          tasks[i].rank++;
        }
      }
      tasks[this.state.draggedCard.id].rank = droppedRank;
      this.setState({ tasks: tasks });
    } else if (draggedRank < droppedRank) {
      for (i in tasks) {
        if (
          tasks[i].bucket === task.bucket &&
          tasks[i].rank <= droppedRank &&
          tasks[i].rank >= draggedRank
        ) {
          tasks[i].rank--;
        }
      }
      tasks[this.state.draggedCard.id].rank = droppedRank;
      this.setState({ tasks: tasks });
    }
  }

  bucketDrop(e, target) {
    if (this.state.draggedBucket === null) {
      return;
    }
    var draggedBucket = this.state.draggedBucket;
    var arr = this.state.buckets_array;
    var target_index = arr.indexOf(target);
    arr = arr.filter(function (ele) {
      return ele !== draggedBucket;
    });
    console.log(arr, target_index);
    arr.splice(target_index, 0, draggedBucket);
    this.setState({ buckets_array: arr });
  }

  // This is the render function
  render() {
    var tasks_array = [];
    var tasks = this.state.tasks;
    var buckets = this.state.buckets_array;
    var n = Object.keys(tasks).length;
    for (var i in buckets) {
      for (var j = 1; j <= n; j++) {
        for (var task in tasks) {
          if (
            Number(tasks[task].rank) === j &&
            tasks[task].bucket === buckets[i]
          )
            tasks_array.push(tasks[task]);
        }
      }
    }

    return (
      <html>
        <div className="App">
          <Header />
          {/* ----------------------------------------------Container-------------------------------------------- */}
          <Container className="board" fluid>
            {/* ---------------------Add Task Button------------------- */}
            <Row className="mt-2 mb-2">
              <Col align="center">
                <Button
                  className="mr-3"
                  onClick={() =>
                    this.setState({
                      showAddModal: true,
                      tasks: tasks,
                      name: "",
                      description: "",
                      assignees: [],
                      assignee: "",
                      rank: "",
                      bucket: "To do",
                      start_date: new Date(),
                      due_date: new Date(),
                      progress: "",
                      label_color: "#3797a4",
                      priority: "",
                    })
                  }
                  variant="info"
                >
                  <i class="fas fa-plus-circle  mr-2"></i>Add Task
                </Button>
                <Button
                  onClick={() => this.setState({ showBucketModal: true })}
                  variant="warning"
                >
                  <i class="fas fa-plus-circle  mr-2"></i>Add Bucket
                </Button>
                <Button
                  variant="outline-dark"
                  className="float-right mr-4"
                  onClick={() => this.setState({ showSettings: true })}
                >
                  Settings<i class="fas fa-cog  settings-icon ml-2"></i>
                </Button>
              </Col>
            </Row>

            {/* ---------------------Task Lists------------------- */}
            <Row className="board">
              {/* ---------------------Buckets------------------- */}
              {this.state.buckets_array.map((bucket) => (
                <Col
                  id={this.state.buckets_array.indexOf(bucket)}
                  className="bucket"
                  onDragOver={(e) => this.dragOver(e)}
                  onDrop={(e) =>
                    this.dropCard(e, this.state.buckets_array.indexOf(bucket))
                  }
                >
                  <Alert
                    variant="primary"
                    style={{ padding: "5px" }}
                    draggable="true"
                    onDragStart={(e) => {
                      this.setState({ draggedBucket: bucket });
                    }}
                    onDragEnd={(e) => {
                      this.setState({ draggedBucket: null });
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDrop={(e) => this.bucketDrop(e, bucket)}
                  >
                    <Row>
                      <Col></Col>
                      <Col>
                        <h6 align="center" style={{ marginBottom: "0px" }}>
                          {bucket}
                        </h6>
                      </Col>
                      <Col>
                        <span style={{ cursor: "pointer" }}>
                          <i
                            class="fas fa-trash float-right bucket-edit"
                            onClick={() => {
                              var arr = this.state.buckets_array;

                              arr = arr.filter(function (ele) {
                                return ele !== bucket;
                              });
                              var tasks = this.state.tasks;
                              for (var i in tasks) {
                                if (tasks[i].bucket === bucket) {
                                  delete tasks[i];
                                }
                              }
                              this.setState({
                                buckets_array: arr,
                                tasks: tasks,
                              });
                            }}
                          ></i>
                        </span>
                      </Col>
                    </Row>
                  </Alert>
                  {/* this.state.tasks */}
                  {Object.values(tasks_array).map((task) =>
                    task.bucket === bucket ? (
                      <Card
                        border="dark"
                        style={{
                          backgroundColor: "#fff4e3",
                          borderWidth: "1px",
                          boxShadow: "3px 3px 5px 1px #888888",
                        }}
                        className="mt-2 task-card"
                        draggable="true"
                        onDragStart={(e) => this.dragStart(e, task)}
                        onDragEnd={(e) => this.dragEnd(e)}
                        onDrop={(e) => this.dropVertical(e, task)}
                      >
                        <Card.Body style={{ padding: "3% 1% 3% 3%" }}>
                          <Card.Text
                            style={{ width: "90%" }}
                            className="float-left mb-0 mt-1"
                          >
                            <i
                              class="fas fa-circle"
                              style={{ color: task.label_color }}
                            ></i>{" "}
                            {task.name}
                          </Card.Text>

                          <span
                            className="float-right mr-2"
                            style={{ cursor: "pointer", width: "10px" }}
                            // variant="outline-info"
                            // size="sm"
                            onClick={() => this.editTask(task)}
                          >
                            <i class="fas fa-ellipsis-v edit-dots"></i>
                          </span>
                        </Card.Body>
                      </Card>
                    ) : null
                  )}
                </Col>
              ))}
            </Row>
          </Container>

          {/* ---------------------Pop Up Modal for Adding NEW Bucket------------------- */}
          <Modal
            size="md"
            centered
            show={this.state.showBucketModal}
            onHide={() => this.setState({ showBucketModal: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      this.setState({ bucketName: e.target.value })
                    }
                    value={this.state.bucketName}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                block
                variant="primary"
                onClick={() => {
                  this.saveBucket(null);
                }}
                disabled={this.state.bucketName === "" ? true : false}
              >
                Save Bucket
              </Button>
            </Modal.Footer>
          </Modal>

          {/* ---------------------Pop Up Modal for EDITING TASK details------------------- */}
          <Modal
            size="lg"
            centered
            show={this.state.showEditModal}
            onHide={() => this.setState({ showEditModal: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  size="sm"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </InputGroup>
              <hr />

              <Row>
                <Col xs={2} className="text-center">
                <i class="fas fa-user-plus"></i> Assignees:
                </Col>
                <Col>
                  <InputGroup className="w-50" size="sm">
                    <FormControl
                      placeholder="Add Assignee"
                      onChange={(e) =>
                        this.setState({ assignee: e.target.value })
                      }
                      value={this.state.assignee}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          var temp = this.state.assignees;
                          temp.push(this.state.assignee);
                          this.setState({ assignees: temp, assignee: "" });
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          this.setState({ assignees: [], assignee: "" });
                        }}
                      >
                        Delete
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>

              <Table
                striped
                bordered
                hover
                size="sm"
                className="mt-3 w-80 text-center"
              >
                <thead>
                  <tr>
                    {this.state.assignees.map((person) => (
                      <th>{person}</th>
                    ))}
                  </tr>
                </thead>
              </Table>
              <hr />
              <Row className="mt-3">
                <Col>
                  <Row>
                    <Col className="text-center">Bucket:</Col>
                    <Col>
                      <DropdownButton
                        title={
                          this.state.bucket === ""
                            ? "select..."
                            : this.state.bucket
                        }
                        size="sm"
                        onSelect={(eventKey) => {
                          this.setState({ bucket: eventKey });
                        }}
                      >
                        {this.state.buckets_array.map((bucket) => (
                          <Dropdown.Item eventKey={bucket}>
                            {bucket}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mt-3">
                    <Col className="text-center">
                      <span className="ml-4">Start Date:</span>
                    </Col>
                    <Col style={{ padding: "0" }}>
                      <DatePicker
                        selected={this.state.start_date}
                        onChange={(date) => {
                          this.setState({
                            start_date: date,
                          });
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="text-center">Proress:</Col>
                    <Col>
                      <DropdownButton
                        title={
                          this.state.progress === ""
                            ? "select..."
                            : this.state.progress
                        }
                        size="sm"
                        onSelect={(eventKey) =>
                          this.setState({ progress: eventKey })
                        }
                      >
                        <Dropdown.Item eventKey="Not Started">
                          Not Started
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="In Progress">
                          In Progress
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Completed">
                          Completed
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mt-3">
                    <Col className="text-center">
                      <span className="ml-4">Due Date:</span>
                    </Col>
                    <Col style={{ padding: "0 15px 0 0" }}>
                      <div className="customDatePickerWidth">
                        <DatePicker
                          selected={this.state.due_date}
                          onChange={(date) =>
                            this.setState({
                              due_date: date,
                            })
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <InputGroup className="mt-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Description :</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  size="sm"
                  as="textarea"
                  rows="2"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  value={this.state.description}
                />
              </InputGroup>
              <hr />
              <Row className="mt-3">
                <Col className="text-center">Label Colour:</Col>
                <Col>
                  <DropdownButton
                    title={
                      this.state.label_color === "#3797a4"
                        ? "default"
                        : this.state.label_color
                    }
                    size="sm"
                    onSelect={(eventKey) =>
                      this.setState({ label_color: eventKey })
                    }
                  >
                    <Dropdown.Item eventKey="red">red</Dropdown.Item>
                    <Dropdown.Item eventKey="green">green</Dropdown.Item>
                    <Dropdown.Item eventKey="yellow">yellow</Dropdown.Item>
                    <Dropdown.Item eventKey="orange">orange</Dropdown.Item>
                    <Dropdown.Item eventKey="blue">blue</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col className="text-center">priority:</Col>
                <Col>
                  <DropdownButton
                    title={
                      this.state.priority === ""
                        ? "select..."
                        : this.state.priority
                    }
                    size="sm"
                    onSelect={(eventKey) =>
                      this.setState({ priority: eventKey })
                    }
                  >
                    <Dropdown.Item eventKey="low">low</Dropdown.Item>
                    <Dropdown.Item eventKey="medium">medium</Dropdown.Item>
                    <Dropdown.Item eventKey="high">high</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  var task = this.state.editModal;
                  var bucket = task.bucket;
                  var id = task.id;
                  var temp = this.state.tasks;
                  for (var i in temp) {
                    if (temp[i].bucket === bucket && temp[i].rank > task.rank)
                      temp[i].rank--;
                  }
                  delete temp[id];
                  this.setState({ tasks: temp, showEditModal: false });
                }}
              >
                <i class="far fa-trash-alt mr-2"></i>Delete Task
              </Button>
              <Button
                variant="primary"
                onClick={() => this.saveEditTask()}
                disabled={this.state.name === "" ? true : false}
              >
                Save Edits
              </Button>
            </Modal.Footer>
          </Modal>

          {/* ---------------------Pop Up Modal for ADDING NEW TASK details------------------- */}
          <Modal
            size="lg"
            centered
            show={this.state.showAddModal}
            onHide={() => this.setState({ showAddModal: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Enter Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  size="sm"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </InputGroup>
              <hr />
              <Row>
                <Col xs={2} className="text-center">
                <i class="fas fa-user-plus"></i> Assignees:
                </Col>
                <Col>
                  <InputGroup className="w-50" size="sm">
                    <FormControl
                      placeholder="Add Assignee"
                      onChange={(e) =>
                        this.setState({ assignee: e.target.value })
                      }
                      value={this.state.assignee}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          var temp = this.state.assignees;
                          temp.push(this.state.assignee);
                          this.setState({ assignees: temp, assignee: "" });
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          this.setState({ assignees: [], assignee: "" });
                        }}
                      >
                        Delete
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>

              <Table
                striped
                bordered
                hover
                size="sm"
                className="mt-3 w-80 text-center"
              >
                <thead>
                  <tr>
                    {this.state.assignees.map((person) => (
                      <th>{person}</th>
                    ))}
                  </tr>
                </thead>
              </Table>
              <hr />
              <Row className="mt-3">
                <Col>
                  <Row>
                    <Col className="text-center">Bucket:</Col>
                    <Col>
                      <DropdownButton
                        title={
                          this.state.bucket === ""
                            ? "select..."
                            : this.state.bucket
                        }
                        size="sm"
                        onSelect={(eventKey) => {
                          this.setState({ bucket: eventKey });
                        }}
                      >
                        {this.state.buckets_array.map((bucket) => (
                          <Dropdown.Item eventKey={bucket}>
                            {bucket}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mt-3">
                    <Col className="text-center">
                      <span className="ml-4">Start Date:</span>
                    </Col>
                    <Col>
                      <DatePicker
                        selected={this.state.start_date}
                        onChange={(date) =>
                          this.setState({
                            start_date: date,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="text-center">Progress:</Col>
                    <Col>
                      <DropdownButton
                        title={
                          this.state.progress === ""
                            ? "select..."
                            : this.state.progress
                        }
                        size="sm"
                        onSelect={(eventKey) =>
                          this.setState({ progress: eventKey })
                        }
                      >
                        <Dropdown.Item eventKey="Not Started">
                          Not Started
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="In Progress">
                          In Progress
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Completed">
                          Completed
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mt-3">
                    <Col className="text-center">
                      <span className="ml-5">Due Date:</span>
                    </Col>
                    <Col>
                      <DatePicker
                        selected={this.state.due_date}
                        onChange={(date) =>
                          this.setState({
                            due_date: date,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <InputGroup className="mt-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Description :</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  rows="2"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </InputGroup>
              <hr />
              <Row className="mt-3">
                <Col className="text-center">Label Colour:</Col>
                <Col>
                  <DropdownButton
                    title={
                      this.state.label_color === "#3797a4"
                        ? "default"
                        : this.state.label_color
                    }
                    size="sm"
                    onSelect={(eventKey) =>
                      this.setState({ label_color: eventKey })
                    }
                  >
                    <Dropdown.Item eventKey="red">red</Dropdown.Item>
                    <Dropdown.Item eventKey="green">green</Dropdown.Item>
                    <Dropdown.Item eventKey="yellow">yellow</Dropdown.Item>
                    <Dropdown.Item eventKey="orange">orange</Dropdown.Item>
                    <Dropdown.Item eventKey="blue">blue</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col className="text-center">priority:</Col>
                <Col>
                  <DropdownButton
                    title={
                      this.state.priority === ""
                        ? "select..."
                        : this.state.priority
                    }
                    size="sm"
                    onSelect={(eventKey) =>
                      this.setState({ priority: eventKey })
                    }
                  >
                    <Dropdown.Item eventKey="low">low</Dropdown.Item>
                    <Dropdown.Item eventKey="medium">medium</Dropdown.Item>
                    <Dropdown.Item eventKey="high">high</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                block
                variant="info"
                onClick={() => this.addTask()}
                disabled={this.state.name === "" ? true : false}
              >
                Add Task
              </Button>
            </Modal.Footer>
          </Modal>

          {/* ---------------------Pop Up Modal for SETTINGS------------------- */}
          <Modal
            show={this.state.showSettings}
            onHide={() => this.setState({ showSettings: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <Col>
                    <p className="float-right mr-3">Auto Save :</p>
                  </Col>
                  <Col>
                    <span className="float-left ml-3">
                      <BootstrapSwitchButton
                        checked={this.state.autoSave}
                        onstyle="success"
                        offstyle="danger"
                        size="sm"
                        onChange={(checked) => {
                          this.setState({ autoSave: checked });
                        }}
                      />
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center mt-3">
                    <Button
                      variant="success"
                      disabled={this.state.autoSave ? true : false}
                      onClick={() => {
                        this.saveData();
                      }}
                    >
                      <i class="fas fa-save mr-2"></i>Save Chart
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center mt-3 mb-3">
                    <Button
                      variant="danger"
                      onClick={() => {
                        this.setState({ showSettings: false });
                        if (window.confirm("Are you sure to reset?"))
                          this.setState({
                            todo: {},
                            doing: {},
                            done: {},
                          });
                      }}
                    >
                      <i class="fas fa-broom mr-2"></i>Reset Chart
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
          <Footer />
        </div>
      </html>
    );
  }
}

export default MainPage;
