import { spawn } from 'child_process';

spawn(
  'bash',
  [
    '-lc',
    'source /opt/ros/humble/setup.bash && ros2 run rosbridge_server rosbridge_websocket'
  ],
  {
    stdio: 'inherit'
  }
);

rosbridge.stdout.on('data', (data) => {
  console.log(data.toString());
});

rosbridge.stderr.on('data', (data) => {
  console.error(data.toString());
});

rosbridge.on('close', (code) => {
  console.log(`Exited: ${code}`);
});