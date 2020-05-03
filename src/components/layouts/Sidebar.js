import React, { Component } from 'react';

import DropDown from './DropDown';

import SimpleBar from 'simplebar-react';

import {
  ListItem,
  ListGroup,
  Collapsibles,
  CollapsibleList,
  ListHeader,
} from './ExpandableMenu';

import '../component styles/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.aside = React.createRef();
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const aside = this.aside.current;
    if (this.state !== prevProps) {
      aside.classList.toggle('open');
    }
  }

  render() {
    return (
      <aside ref={this.aside} className='open'>
        <nav className='sidebar'>
          <div className='nav-header'>
            <div className='profile mb-2 mt-2'>
              <div className='details'>
                <div className='name'>Sunny Asar</div>
                <div className='privilege'>ADMINISTRATOR</div>
              </div>
              <DropDown />
            </div>
          </div>
          <SimpleBar className='nav-content'>
            {/* <div className='nav-content'> */}
            <ListGroup headName='Navigation'>
              <ListItem
                metaTag={
                  <span className='div ml-auto badge-success badge'>1</span>
                }
                iconName='home'
                text='Dashboard'
              />
            </ListGroup>
            <Collapsibles>
              <ListHeader headName='Apps' />
              <ListItem iconName='insert_invitation' text='Calendar' />
              <CollapsibleList
                iconName={'email'}
                name='Emails'
                collapseItems={['Inbox', 'Read', 'Compose']}
              />
              <CollapsibleList
                iconName={'business_center'}
                name='Projects'
                collapseItems={['List', 'Details']}
              />
              <CollapsibleList
                iconName={'bookmark_border'}
                name='Tasks'
                collapseItems={['List', 'Kanban Board']}
              />
              <ListHeader headName='Custom' />
              <CollapsibleList
                iconName={'description'}
                name='Pages'
                collapseItems={[
                  'Starter',
                  'Profile',
                  'Activity',
                  'Invoice',
                  'Pricing',
                  'Maintenance',
                  'Login',
                  'Register',
                  'Recover Password',
                  'Confirm',
                  'Error 404',
                ]}
              />
              <CollapsibleList
                iconName={'web'}
                name='Layouts'
                collapseItems={[
                  'Horizontal Nav',
                  'RTL',
                  'Dark',
                  'Scrollable',
                  'Boxed',
                  'With Pre-loader',
                  'Dark Side Nav',
                ]}
              />
              <ListHeader headName='COMPONENTS' />
              <CollapsibleList
                iconName={'widgets'}
                name='UI Elements'
                collapseItems={['UI Elements', 'Bootstrap UI', 'Widgets']}
              />

              <CollapsibleList
                iconName={'description'}
                name='Forms'
                collapseItems={[
                  'Basic Elements',
                  'Advanced',
                  'Validation',
                  'Wizard',
                  'Editor',
                  'File Uploads',
                ]}
              />
              <ListItem iconName='pie_chart' text='Charts' />

              <CollapsibleList
                iconName={'table_chart'}
                name='Tables'
                collapseItems={['Basic', 'Advanced']}
              />
            </Collapsibles>
            {/* </div> */}
          </SimpleBar>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
