import * as ROSLIB from 'roslib'; // named imports, not default

// Connect to rosbridge
const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });

ros.on('connection', () => {
    console.log('✅ Connected to rosbridge');

    // Create a publisher on /chatter
    let chatter = new ROSLIB.Topic({
        ros: ros,
        name: '/chatter',
        messageType: 'std_msgs/String'  // Use the proper message type here
    });

    // Create the message using the specific message type
    let msg = {data: 'Hello from Node.js test'};

    // Publish the message
    chatter.publish(msg);
    console.log('📤 Message sent:', msg);
});

ros.on('error', (error) => {
    console.error('❌ Connection error:', error);
});

ros.on('close', () => {
    console.log('🔌 Connection closed');
});