import React, { useState } from 'react';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProjectsToggle = () => {
    setProjectsOpen(!projectsOpen);
  };

  const navItems = [
    { title: 'About', link: '#' },
    { title: 'Home', link: '#' },
    {
      title: 'Projects',
      link: '#',
      subItems: [
        { title: 'Project 1', link: '#' },
        { title: 'Project 2', link: '#' },
        { title: 'Project 3', link: '#' },
      ],
    },
    { title: 'Blog', link: '#' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          height: '100vh',
          width: sidebarOpen ? '200px' : '0px',
          backgroundColor: 'grey',
          position: 'fixed',
          top: '0',
          left: '0',
          transition: 'width 0.2s ease-in-out',
          overflowX: 'hidden',
          zIndex: '1',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {navItems.map((item) => (
            <li key={item.title}>
              {item.subItems ? (
                <>
                  <button
                    style={{
                      width: '100%',
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: 'white',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      padding: '10px 15px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onClick={handleProjectsToggle}
                  >
                    <span>{item.title}</span>
                    <span>{projectsOpen ? '▲' : '▼'}</span>
                  </button>
                  {projectsOpen && (
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', animation: 'fadeIn 0.5s ease-in-out' }}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <a
                            href={subItem.link}
                            style={{
                              display: 'block',
                              backgroundColor: 'white',
                              color: 'black',
                              fontSize: '1rem',
                              textAlign: 'center',
                              padding: '10px 15px',
                            }}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.link}
                  style={{
                    display: 'block',
                    backgroundColor: 'transparent',
                    color: 'white',
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    padding: '10px 15px',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'yellow';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          marginLeft: sidebarOpen ? '200px' : '0px',
          transition: 'margin-left 0.2s ease-in-out',
          width: '100%',
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <h1>Main Content</h1>
        <p>
          <button
            onClick={handleToggle}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <svg width='40' height='40' viewBox="-2 -2 20 20">
              <rect x="1" y="6" width="12" height="1" fill="black" />
              <rect x="1" y="10" width="12" height="1" fill="black" />
              <rect x="1" y="14" width="12" height="1" fill="black" />
            </svg>
          </button>
          ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
}
export default Sidebar;
