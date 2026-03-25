import React, { useState } from 'react';

interface Task {
  id: string;
  name: string;
  iterations: number;
  progress: number;
  status: 'pending' | 'active' | 'completed';
}

export function LoopOperation() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      name: 'Generate keyboard layouts',
      iterations: 3,
      progress: 66,
      status: 'active',
    },
    {
      id: '2',
      name: 'Implement morpheme detection',
      iterations: 5,
      progress: 40,
      status: 'active',
    },
    {
      id: '3',
      name: 'Test multilingual support',
      iterations: 2,
      progress: 100,
      status: 'completed',
    },
  ]);

  const [selectedTaskId, setSelectedTaskId] = useState<string>('1');

  const handleIterationComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              progress: Math.min(100, task.progress + 33),
              status: task.progress + 33 >= 100 ? 'completed' : 'active',
            }
          : task
      )
    );
  };

  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  return (
    <div className="flex flex-col gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        LOOPERATION: NEURODIVERGENT TASK EXECUTION
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            ACTIVE TASKS
          </h4>
          <div className="space-y-2">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setSelectedTaskId(task.id)}
                className={`w-full p-3 rounded border-2 transition-all text-left ${
                  selectedTaskId === task.id
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-mono text-foreground">{task.name}</p>
                  <span
                    className={`text-xs font-mono ${
                      task.status === 'completed' ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {task.status === 'completed' ? '✓' : '○'}
                  </span>
                </div>
                <div className="w-full h-1 bg-border rounded overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Task Details */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            ITERATION DETAILS
          </h4>
          {selectedTask && (
            <div className="space-y-3 p-4 bg-background rounded border border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">TASK</p>
                <p className="text-sm font-mono text-foreground">{selectedTask.name}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">TOTAL ITERATIONS</p>
                <p className="text-sm font-mono text-accent">{selectedTask.iterations}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">CURRENT PROGRESS</p>
                <p className="text-sm font-mono text-foreground">{selectedTask.progress}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">STATUS</p>
                <p
                  className={`text-sm font-mono ${
                    selectedTask.status === 'completed'
                      ? 'text-accent'
                      : selectedTask.status === 'active'
                        ? 'text-secondary'
                        : 'text-muted-foreground'
                  }`}
                >
                  {selectedTask.status.toUpperCase()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Principles */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            LOOPERATION PRINCIPLES
          </h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>✓ No time pressure</p>
            <p>✓ Output becomes input</p>
            <p>✓ AI holds context</p>
            <p>✓ VERO check each iteration</p>
            <p>✓ Seamless transfer</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      {selectedTask && selectedTask.status !== 'completed' && (
        <button
          onClick={() => handleIterationComplete(selectedTask.id)}
          className="w-full px-4 py-3 bg-accent text-accent-foreground rounded font-mono text-sm font-bold hover:opacity-90 transition-opacity"
        >
          COMPLETE ITERATION
        </button>
      )}

      {/* Info */}
      <div className="p-4 bg-background rounded border border-border text-xs text-muted-foreground">
        <p className="mb-2">
          <strong>LOOPERATION</strong> is optimized for neurodivergent task execution. No Pomodoro
          timers. No forced breaks. Just output → input → output → ...
        </p>
        <p>Hyperfocus is a feature, not a bug. Let it flow.</p>
      </div>
    </div>
  );
}
