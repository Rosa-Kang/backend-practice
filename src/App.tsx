import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  AppBar, 
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  useTheme,
  useMediaQuery,
  TextField,
  Collapse,
  ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
import { questions } from './data';
import { Question } from './types';

function App() {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userCode, setUserCode] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Group questions by topic
  const questionsByTopic = questions.reduce((acc, question) => {
    if (!acc[question.topic]) {
      acc[question.topic] = [];
    }
    acc[question.topic].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => {
      const newSet = new Set<string>();
      // If the clicked topic is not already expanded, add it to the set
      if (!prev.has(topic)) {
        newSet.add(topic);
      }
      return newSet;
    });
  };

  const handleQuestionClick = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setShowAnswer(false);
    setUserCode('');
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setUserCode('');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
      setUserCode('');
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
        <IconButton 
          onClick={toggleDrawer}
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h6" className="section-title">Questions</Typography>
      </Box>
      <Divider />
      <List>
        {Object.entries(questionsByTopic).map(([topic, topicQuestions]) => (
          <React.Fragment key={topic}>
            <ListItemButton 
              onClick={() => toggleTopic(topic)}
              sx={{
                backgroundColor: expandedTopics.has(topic) 
                  ? 'rgba(103, 58, 183, 0.05)' 
                  : 'rgba(245, 245, 245, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(103, 58, 183, 0.08)',
                },
                '&:focus': {
                  backgroundColor: 'rgba(103, 58, 183, 0.12)',
                },
                '& .MuiListItemIcon-root': {
                  minWidth: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                transition: 'background-color 0.2s ease-in-out',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                py: 1,
              }}
            >
              <ListItemText 
                primary={topic}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 'medium',
                    fontSize: '0.95rem',
                    color: expandedTopics.has(topic) 
                      ? 'primary.main' 
                      : 'text.primary',
                    lineHeight: 1.5,
                  }
                }}
              />
              <ListItemIcon sx={{ 
                color: 'primary.main',
                transition: 'transform 0.2s ease-in-out',
                transform: expandedTopics.has(topic) ? 'rotate(0deg)' : 'rotate(-90deg)',
                minWidth: 'auto',
                marginLeft: 1,
              }}>
                <ExpandMoreIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={expandedTopics.has(topic)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {topicQuestions.map((question, index) => {
                  // Find the global index of this question
                  const globalIndex = questions.findIndex(q => q.id === question.id);
                  return (
                    <ListItemButton
                      key={question.id}
                      selected={currentQuestion === globalIndex}
                      onClick={() => handleQuestionClick(globalIndex)}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          backgroundColor: 'rgba(103, 58, 183, 0.04)',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(103, 58, 183, 0.08)',
                          '&:hover': {
                            backgroundColor: 'rgba(103, 58, 183, 0.12)',
                          },
                        },
                      }}
                    >
                      <ListItemText 
                        primary={`${question.id}. ${question.title}`}
                        primaryTypographyProps={{
                          style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: '0.9rem',
                          }
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ 
              mr: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="app-title">
            Coding Practice Questions
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          width: drawerOpen ? 250 : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? 250 : 0,
            boxSizing: 'border-box',
            transition: theme.transitions.create(['width', 'margin', 'transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.complex,
            }),
            overflowX: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerOpen ? 250 : 0}px)` },
          marginLeft: { sm: drawerOpen ? 'auto' : 0 },
          marginTop: '64px',
          transition: theme.transitions.create(['margin', 'width', 'transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex,
          }),
          overflow: 'auto',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(0)',
          '& > *': {
            transition: theme.transitions.create(['transform', 'opacity'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.complex,
            }),
            transform: drawerOpen ? 'translateX(0)' : 'translateX(0)',
            opacity: drawerOpen ? 1 : 1,
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            width: '100%',
            transition: theme.transitions.create(['width', 'transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.complex,
            }),
          }}
        >
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              {questions[currentQuestion].title}
            </Typography>
            <Typography variant="body1" paragraph>
              {questions[currentQuestion].question}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom className="section-title">
                Your Solution
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                variant="outlined"
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder="Write your solution here..."
                sx={{ 
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowAnswer(!showAnswer)}
                sx={{ 
                  mb: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                {showAnswer ? 'Hide Answer' : 'Compare with Solution'}
              </Button>
            </Box>

            <Collapse in={showAnswer} timeout={400}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                <Typography variant="h6" gutterBottom>
                  Solution
                </Typography>
                <ReactMarkdown>
                  {`\`\`\`javascript\n${questions[currentQuestion].answer}\n\`\`\``}
                </ReactMarkdown>
              </Paper>
            </Collapse>
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateX(-2px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateX(2px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
