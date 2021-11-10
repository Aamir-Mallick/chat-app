import React, { useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { io } from "socket.io-client";
import { useStyles } from "./ChatRoomStyles";
import SendIcon from "@material-ui/icons/Send";
import AssistantIcon from "@material-ui/icons/Assistant";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import ScrollToBottom from "react-scroll-to-bottom";

const socket = io("https://chat-app-server-aamir.herokuapp.com/");

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const ChatRoom = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [group, setGroup] = React.useState<{ name: string; room: string }[]>(
    []
  );
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [currentActiveRoom, setCurrentActiveRoom] = React.useState({});
  const [leftStatus, setLeftStatus] = React.useState<any>({});
  const [chatMessage, setChatMessage] = React.useState<any>({});
  console.log(group.length > 0, "status");
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setChatMessage((prev: any) => {
        return {
          ...prev,
          [data.room]: prev[data.room] ? [...prev[data.room], data] : [data],
        };
      });
    });
  }, []);

  useEffect(() => {
    socket.on("user_left", (data) => {
      console.log(data, "user");
      setLeftStatus(data);
      setTimeout(() => {
        setLeftStatus({});
      }, 3000);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    if (name !== "" && room !== "") {
      if (
        group?.filter((filterVal) => {
          return filterVal.room === room;
        }).length === 0
      ) {
        setGroup((pre) => [...pre, { name, room }]);
        setOpen(false);
        socket.emit("join_room", room);
      }
      setOpen(false);
    }
  };
  const onSendMessage = async () => {
    if (message) {
      const sentData = {
        name,
        room,
        message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", sentData);
      setMessage("");
    }
  };
  const setMessageRoom = (roomValue: string) => {
    setRoom(roomValue);
  };

  const leaveHandler = (e: any, leaveValue: { name: string; room: string }) => {
    e.stopPropagation();
    let filtered = group.filter((filterVal) => {
      return (
        filterVal.name !== leaveValue.name || filterVal.room !== leaveValue.room
      );
    });
    setGroup(filtered);
    setRoom("");
    socket.emit("leave_room", leaveValue);
  };

  return (
    <>
      <Box className={classes.rootContainer}>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography color="secondary" variant="h4">
              Welcome Social Group Chat
            </Typography>
            <Typography color="secondary" variant="body2">
              Invite Your Friends
            </Typography>
          </Box>
          <Box>
            <Button color="secondary" variant="contained" onClick={handleOpen}>
              Join Now
            </Button>
          </Box>
        </Box>
        <Box style={{ marginTop: "15px" }}>
          <Button color="secondary" variant="contained" onClick={handleOpen}>
            Create New Group
          </Button>
        </Box>
      </Box>
      {group?.length <= 0 ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Box>
            <Typography color="primary" variant="h4">
              Say Hii
            </Typography>
            <Box style={{ textAlign: "center" }}>
              <ChildCareIcon />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={classes.messageContainer}>
          <Box className={classes.roomContainer}>
            <Box
              style={{
                color: "#fff",
                fontWeight: 900,
                textAlign: "center",
                letterSpacing: "1px",
                paddingTop: "5px",
              }}
            >
              Chat Box
            </Box>
            <Box>
              <List
                component="nav"
                aria-label="secondary mailbox folders"
                color="secondary"
              >
                <ScrollToBottom className={classes.roomContainerScroll}>
                  {group.map((value) => {
                    return (
                      <ListItem
                        key={value.room}
                        onClick={() => {
                          setMessageRoom(value.room);
                        }}
                        style={{
                          backgroundColor: "#64ffda",
                          marginTop: "5px",
                          // width: "200px",
                        }}
                        button
                      >
                        <ListItemIcon>
                          <AssistantIcon />
                        </ListItemIcon>
                        <ListItemText primary={value.room} />
                        <div
                          onClick={(e) => leaveHandler(e, value)}
                          style={{ color: "#041733" }}
                        >
                          Leave <ExitToAppIcon color="primary" />
                        </div>
                      </ListItem>
                    );
                  })}
                </ScrollToBottom>
              </List>
            </Box>
          </Box>
          <Box className={classes.chatContainer}>
            <Box className={classes.chatHeader}>Active {room} </Box>
            <Box className={classes.chatBody}>
              <ScrollToBottom className={classes.chatBody}>
                {chatMessage[room]?.map((chatValue: any) => {
                  return (
                    <Box
                      style={{
                        display: "flex",
                        justifyContent:
                          name === chatValue.name ? "flex-start" : "flex-end",
                        margin: "15px 10px",
                      }}
                    >
                      <Box>
                        <Typography
                          style={{
                            padding: "5px",
                            backgroundColor: "#4fd0b1",
                            borderRadius: "5px",
                          }}
                          variant="body2"
                        >
                          {chatValue.message}
                        </Typography>
                        <Box style={{ display: "flex" }}>
                          <Typography color="primary" variant="body2">
                            {chatValue.time}
                          </Typography>
                          <Typography
                            style={{ marginLeft: "5px", fontWeight: 700 }}
                            color="primary"
                            variant="body2"
                          >
                            {chatValue.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </ScrollToBottom>
            </Box>
            <Box className={classes.chatFooter}>
              <Box style={{ flexGrow: 1 }}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Type message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <IconButton onClick={onSendMessage}>
                  <SendIcon color="primary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography align="center" color="secondary" variant="h4">
            Create Group
          </Typography>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Group Name"
              variant="outlined"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Button
              onClick={handleCreate}
              color="secondary"
              variant="contained"
            >
              Create
            </Button>
          </div>
        </div>
      </Modal>
      {Object.keys(leftStatus).length > 0 ? (
        <p
          style={{
            position: "absolute",
            backgroundColor: "#3ae32f",
            minWidth: "200px",
            left: "50%",
            right: "50%",
            top: "30px",
            padding: "5px 10px",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {leftStatus?.name} left {leftStatus?.room}
        </p>
      ) : null}
    </>
  );
};
