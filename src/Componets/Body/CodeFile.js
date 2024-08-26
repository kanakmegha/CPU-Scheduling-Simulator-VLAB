export const languages = [
    {
      name: "c",
      code: `// C program for CPU Scheduling
      #include <stdio.h>
      #include <limits.h>
      //First Come First Served
      void fcfs(int n, int bt[]) {
          int wt[n], tat[n];
          wt[0] = 0;
          tat[0] = bt[0];
          for (int i = 1; i < n; i++) {
              wt[i] = 0;
              for (int j = 0; j < i; j++)
                  wt[i] += bt[j];
              tat[i] = wt[i] + bt[i];
          }
          printf("FCFS Scheduling:\n");
          printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
          for (int i = 0; i < n; i++)
              printf("%d\t%d\t%d\t%d\n", i + 1, bt[i], wt[i], tat[i]);
      }
      //Shortest Job First
      void sjf(int n, int bt[]) {
          int wt[n], tat[n];
          int btCopy[n];
          for (int i = 0; i < n; i++)
              btCopy[i] = bt[i];
          
          for (int i = 0; i < n; i++) {
              for (int j = i + 1; j < n; j++) {
                  if (btCopy[i] > btCopy[j]) {
                      int temp = btCopy[i];
                      btCopy[i] = btCopy[j];
                      btCopy[j] = temp;
                  }
              }
          }
          
          wt[0] = 0;
          tat[0] = btCopy[0];
          for (int i = 1; i < n; i++) {
              wt[i] = 0;
              for (int j = 0; j < i; j++)
                  wt[i] += btCopy[j];
              tat[i] = wt[i] + btCopy[i];
          }
          
          printf("SJF Scheduling:\n");
          printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
          for (int i = 0; i < n; i++)
              printf("%d\t%d\t%d\t%d\n", i + 1, btCopy[i], wt[i], tat[i]);
      }
      //Shortest Remaining Time First
      void srtf(int n, int bt[]) {
          int wt[n], tat[n];
          int rt[n];
          for (int i = 0; i < n; i++)
              rt[i] = bt[i];
          
          int complete = 0, t = 0, min = INT_MAX, shortest = 0;
          while (complete != n) {
              min = INT_MAX;
              for (int i = 0; i < n; i++) {
                  if ((rt[i] < min) && (rt[i] > 0)) {
                      min = rt[i];
                      shortest = i;
                  }
              }
              rt[shortest]--;
              if (rt[shortest] == 0) {
                  complete++;
                  tat[shortest] = t + 1;
                  wt[shortest] = tat[shortest] - bt[shortest];
              }
              t++;
          }
          
          printf("SRTF Scheduling:\n");
          printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
          for (int i = 0; i < n; i++)
              printf("%d\t%d\t%d\t%d\n", i + 1, bt[i], wt[i], tat[i]);
      }
      //Priority Preemptive
      void priorityPreemptive(int n, int bt[], int pr[]) {
          int wt[n], tat[n], rt[n];
          for (int i = 0; i < n; i++)
              rt[i] = bt[i];
          
          int complete = 0, t = 0, highest = 0, max = INT_MIN;
          while (complete != n) {
              max = INT_MIN;
              for (int i = 0; i < n; i++) {
                  if (rt[i] > 0 && pr[i] > max) {
                      max = pr[i];
                      highest = i;
                  }
              }
              rt[highest]--;
              if (rt[highest] == 0) {
                  complete++;
                  tat[highest] = t + 1;
                  wt[highest] = tat[highest] - bt[highest];
              }
              t++;
          }
          
          printf("Priority Preemptive Scheduling:\n");
          printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
          for (int i = 0; i < n; i++)
              printf("%d\t%d\t%d\t%d\n", i + 1, bt[i], wt[i], tat[i]);
      }
      //Priority Non Preemptive
      void priorityNonPreemptive(int n, int bt[], int pr[]) {
          int wt[n], tat[n];
          int btCopy[n], prCopy[n];
          for (int i = 0; i < n; i++) {
              btCopy[i] = bt[i];
              prCopy[i] = pr[i];
          }
          
          for (int i = 0; i < n; i++) {
              for (int j = i + 1; j < n; j++) {
                  if (prCopy[i] < prCopy[j]) {
                      int temp = prCopy[i];
                      prCopy[i] = prCopy[j];
                      prCopy[j] = temp;
                      temp = btCopy[i];
                      btCopy[i] = btCopy[j];
                      btCopy[j] = temp;
                  }
              }
          }
          
          wt[0] = 0;
          tat[0] = btCopy[0];
          for (int i = 1; i < n; i++) {
              wt[i] = 0;
              for (int j = 0; j < i; j++)
                  wt[i] += btCopy[j];
              tat[i] = wt[i] + btCopy[i];
          }
          
          printf("Priority Non-Preemptive Scheduling:\n");
          printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
          for (int i = 0; i < n; i++)
              printf("%d\t%d\t%d\t%d\n", i + 1, btCopy[i], wt[i], tat[i]);
      }
      
      int main() {
          int n, choice;
          printf("Enter number of processes: ");
          scanf("%d", &n);
          int bt[n], pr[n];
          
          printf("Enter burst times for %d processes: \n", n);
          for (int i = 0; i < n; i++)
              scanf("%d", &bt[i]);
          
          if (choice == 4 || choice == 5) {
              printf("Enter priorities for %d processes: \n", n);
              for (int i = 0; i < n; i++)
                  scanf("%d", &pr[i]);
          }
      
          printf("Choose Scheduling Algorithm:\n");
          printf("1. FCFS\n2. SJF\n3. SRTF\n4. Priority Preemptive\n5. Priority Non-Preemptive\n");
          scanf("%d", &choice);
      
          switch (choice) {
              case 1:
                  fcfs(n, bt);
                  break;
              case 2:
                  sjf(n, bt);
                  break;
              case 3:
                  srtf(n, bt);
                  break;
              case 4:
                  priorityPreemptive(n, bt, pr);
                  break;
              case 5:
                  priorityNonPreemptive(n, bt, pr);
                  break;
              default:
                  printf("Invalid choice.\n");
          }
      
          return 0;
      }
      
    `,
    },
    {
      name: "cpp",
      code: `// C++ program for CPU Scheduling
      #include <iostream>
      #include <vector>
      #include <algorithm>
      #include <climits>
      
      using namespace std;
      //First Come First Served
      void fcfs(const vector<int>& bt) {
          vector<int> wt(bt.size()), tat(bt.size());
          wt[0] = 0;
          tat[0] = bt[0];
          for (size_t i = 1; i < bt.size(); i++) {
              wt[i] = 0;
              for (size_t j = 0; j < i; j++)
                  wt[i] += bt[j];
              tat[i] = wt[i] + bt[i];
          }
          cout << "FCFS Scheduling:\n";
          cout << "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
          for (size_t i = 0; i < bt.size(); i++)
              cout << i + 1 << "\t" << bt[i] << "\t" << wt[i] << "\t" << tat[i] << "\n";
      }
      //Shortest Job First
      void sjf(vector<int>& bt) {
          vector<int> wt(bt.size()), tat(bt.size());
          vector<int> btCopy = bt;
          sort(btCopy.begin(), btCopy.end());
          wt[0] = 0;
          tat[0] = btCopy[0];
          for (size_t i = 1; i < bt.size(); i++) {
              wt[i] = 0;
              for (size_t j = 0; j < i; j++)
                  wt[i] += btCopy[j];
              tat[i] = wt[i] + btCopy[i];
          }
          cout << "SJF Scheduling:\n";
          cout << "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
          for (size_t i = 0; i < bt.size(); i++)
              cout << i + 1 << "\t" << btCopy[i] << "\t" << wt[i] << "\t" << tat[i] << "\n";
      }
      
      void srtf(vector<int>& bt) {
          vector<int> wt(bt.size()), tat(bt.size()), rt = bt;
          int complete = 0, t = 0, min = INT_MAX, shortest = 0;
          while (complete != bt.size()) {
              min = INT_MAX;
              for (size_t i = 0; i < bt.size(); i++) {
                  if (rt[i] < min && rt[i] > 0) {
                      min = rt[i];
                      shortest = i;
                  }
              }
              rt[shortest]--;
              if (rt[shortest] == 0) {
                  complete++;
                  tat[shortest] = t + 1;
                  wt[shortest] = tat[shortest] - bt[shortest];
              }
              t++;
          }
          cout << "SRTF Scheduling:\n";
          cout << "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
          for (size_t i = 0; i < bt.size(); i++)
              cout << i + 1 << "\t" << bt[i] << "\t" << wt[i] << "\t" << tat[i] << "\n";
      }
      //Priority Preemptive 
      void priorityPreemptive(vector<int>& bt, vector<int>& pr) {
          vector<int> wt(bt.size()), tat(bt.size()), rt = bt;
          int complete = 0, t = 0, highest = 0, max = INT_MIN;
          while (complete != bt.size()) {
              max = INT_MIN;
              for (size_t i = 0; i < bt.size(); i++) {
                  if (rt[i] > 0 && pr[i] > max) {
                      max = pr[i];
                      highest = i;
                  }
              }
              rt[highest]--;
              if (rt[highest] == 0) {
                  complete++;
                  tat[highest] = t + 1;
                  wt[highest] = tat[highest] - bt[highest];
              }
              t++;
          }
          cout << "Priority Preemptive Scheduling:\n";
          cout << "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
          for (size_t i = 0; i < bt.size(); i++)
              cout << i + 1 << "\t" << bt[i] << "\t" << wt[i] << "\t" << tat[i] << "\n";
      }
      Priority on Preemptive
      void priorityNonPreemptive(vector<int>& bt, vector<int>& pr) {
          vector<int> wt(bt.size()), tat(bt.size());
          vector<int> btCopy = bt, prCopy = pr;
          vector<pair<int, int>> proc(bt.size());
          
          for (size_t i = 0; i < bt.size(); i++) {
              proc[i] = {prCopy[i], btCopy[i]};
          }
          sort(proc.rbegin(), proc.rend());
      
          wt[0] = 0;
          tat[0] = proc[0].second;
          for (size_t i = 1; i < bt.size(); i++) {
              wt[i] = 0;
              for (size_t j = 0; j < i; j++)
                  wt[i] += proc[j].second;
              tat[i] = wt[i] + proc[i].second;
          }
          cout << "Priority Non-Preemptive Scheduling:\n";
          cout << "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
          for (size_t i = 0; i < bt.size(); i++)
              cout << i + 1 << "\t" << proc[i].second << "\t" << wt[i] << "\t" << tat[i] << "\n";
      }
      
      int main() {
          int n, choice;
          cout << "Enter number of processes: ";
          cin >> n;
          vector<int> bt(n), pr(n);
      
          cout << "Enter burst times for " << n << " processes:\n";
          for (int i = 0; i < n; i++)
              cin >> bt[i];
      
          if (choice == 4 || choice == 5) {
              cout << "Enter priorities for " << n << " processes:\n";
              for (int i = 0; i < n; i++)
                  cin >> pr[i];
          }
      
          cout << "Choose Scheduling Algorithm:\n";
          cout << "1. FCFS\n2. SJF\n3. SRTF\n4. Priority Preemptive\n5. Priority Non-Preemptive\n";
          cin >> choice;
      
          switch (choice) {
              case 1:
                  fcfs(bt);
                  break;
              case 2:
                  sjf(bt);
                  break;
              case 3:
                  srtf(bt);
                  break;
              case 4:
                  priorityPreemptive(bt, pr);
                  break;
              case 5:
                  priorityNonPreemptive(bt, pr);
                  break;
              default:
                  cout << "Invalid choice.\n";
          }
      
          return 0;
      }
      
    
    
    `,
    },
  
    {
      name: "java",
      code: `// Java program for CPU Scheduling
      import java.util.*;

      public class SchedulingAlgorithms {
        //First Come First Served
          public static void fcfs(int[] bt) {
              int n = bt.length;
              int[] wt = new int[n], tat = new int[n];
              wt[0] = 0;
              tat[0] = bt[0];
              for (int i = 1; i < n; i++) {
                  wt[i] = 0;
                  for (int j = 0; j < i; j++)
                      wt[i] += bt[j];
                  tat[i] = wt[i] + bt[i];
              }
              System.out.println("FCFS Scheduling:");
              System.out.println("Process\tBurst Time\tWaiting Time\tTurnaround Time");
              for (int i = 0; i < n; i++)
                  System.out.println((i + 1) + "\t" + bt[i] + "\t" + wt[i] + "\t" + tat[i]);
          }
          //Shortest Job First
          public static void sjf(int[] bt) {
              int n = bt.length;
              int[] wt = new int[n], tat = new int[n];
              int[] btCopy = Arrays.copyOf(bt, n);
              Arrays.sort(btCopy);
              wt[0] = 0;
              tat[0] = btCopy[0];
              for (int i = 1; i < n; i++) {
                  wt[i] = 0;
                  for (int j = 0; j < i; j++)
                      wt[i] += btCopy[j];
                  tat[i] = wt[i] + btCopy[i];
              }
              System.out.println("SJF Scheduling:");
              System.out.println("Process\tBurst Time\tWaiting Time\tTurnaround Time");
              for (int i = 0; i < n; i++)
                  System.out.println((i + 1) + "\t" + btCopy[i] + "\t" + wt[i] + "\t" + tat[i]);
          }
          //Shortest Remaining Time First
          public static void srtf(int[] bt) {
              int n = bt.length;
              int[] wt = new int[n], tat = new int[n];
              int[] rt = Arrays.copyOf(bt, n);
              int complete = 0, t = 0;
              while (complete != n) {
                  int min = Integer.MAX_VALUE;
                  int shortest = 0;
                  for (int i = 0; i < n; i++) {
                      if (rt[i] < min && rt[i] > 0) {
                          min = rt[i];
                          shortest = i;
                      }
                  }
                  rt[shortest]--;
                  if (rt[shortest] == 0) {
                      complete++;
                      tat[shortest] = t + 1;
                      wt[shortest] = tat[shortest] - bt[shortest];
                  }
                  t++;
              }
              System.out.println("SRTF Scheduling:");
              System.out.println("Process\tBurst Time\tWaiting Time\tTurnaround Time");
              for (int i = 0; i < n; i++)
                  System.out.println((i + 1) + "\t" + bt[i] + "\t" + wt[i] + "\t" + tat[i]);
          }
          //Priority Preemptive
          public static void priorityPreemptive(int[] bt, int[] pr) {
              int n = bt.length;
              int[] wt = new int[n], tat = new int[n], rt = Arrays.copyOf(bt, n);
              int complete = 0, t = 0;
              while (complete != n) {
                  int max = Integer.MIN_VALUE;
                  int highest = 0;
                  for (int i = 0; i < n; i++) {
                      if (rt[i] > 0 && pr[i] > max) {
                          max = pr[i];
                          highest = i;
                      }
                  }
                  rt[highest]--;
                  if (rt[highest] == 0) {
                      complete++;
                      tat[highest] = t + 1;
                      wt[highest] = tat[highest] - bt[highest];
                  }
                  t++;
              }
              System.out.println("Priority Preemptive Scheduling:");
              System.out.println("Process\tBurst Time\tWaiting Time\tTurnaround Time");
              for (int i = 0; i < n; i++)
                  System.out.println((i + 1) + "\t" + bt[i] + "\t" + wt[i] + "\t" + tat[i]);
          }
          //Priority Non Preemptive
          public static void priorityNonPreemptive(int[] bt, int[] pr) {
              int n = bt.length;
              int[] wt = new int[n], tat = new int[n];
              int[] btCopy = Arrays.copyOf(bt, n);
              int[] prCopy = Arrays.copyOf(pr, n);
              List<int[]> proc = new ArrayList<>();
              for (int i = 0; i < n; i++) {
                  proc.add(new int[]{prCopy[i], btCopy[i]});
              }
              proc.sort((a, b) -> b[0] - a[0]);
              wt[0] = 0;
              tat[0] = proc.get(0)[1];
              for (int i = 1; i < n; i++) {
                  wt[i] = 0;
                  for (int j = 0; j < i; j++)
                      wt[i] += proc.get(j)[1];
                  tat[i] = wt[i] + proc.get(i)[1];
              }
              System.out.println("Priority Non-Preemptive Scheduling:");
              System.out.println("Process\tBurst Time\tWaiting Time\tTurnaround Time");
              for (int i = 0; i < n; i++)
                  System.out.println((i + 1) + "\t" + proc.get(i)[1] + "\t" + wt[i] + "\t" + tat[i]);
          }
          
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              System.out.print("Enter number of processes: ");
              int n = sc.nextInt();
              int[] bt = new int[n];
              int[] pr = new int[n];
              
              System.out.println("Enter burst times for " + n + " processes:");
              for (int i = 0; i < n; i++)
                  bt[i] = sc.nextInt();
              
              System.out.print("Choose Scheduling Algorithm:\n1. FCFS\n2. SJF\n3. SRTF\n4. Priority Preemptive\n5. Priority Non-Preemptive\n");
              int choice = sc.nextInt();
              
              if (choice == 4 || choice == 5) {
                  System.out.println("Enter priorities for " + n + " processes:");
                  for (int i = 0; i < n; i++)
                      pr[i] = sc.nextInt();
              }
      
              switch (choice) {
                  case 1:
                      fcfs(bt);
                      break;
                  case 2:
                      sjf(bt);
                      break;
                  case 3:
                      srtf(bt);
                      break;
                  case 4:
                      priorityPreemptive(bt, pr);
                      break;
                  case 5:
                      priorityNonPreemptive(bt, pr);
                      break;
                  default:
                      System.out.println("Invalid choice.");
              }
              sc.close();
          }
      }
      
  
    `,
    },
    {
      name: "python",
      code: `#Python Progra for CPU Scheduling
      #First Come First Serve
      def fcfs(bt):
    n = len(bt)
    wt = [0] * n
    tat = [0] * n
    wt[0] = 0
    tat[0] = bt[0]
    for i in range(1, n):
        wt[i] = sum(bt[:i])
        tat[i] = wt[i] + bt[i]
    
    print("FCFS Scheduling:")
    print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
    for i in range(n):
        print(f"{i + 1}\t{bt[i]}\t{wt[i]}\t{tat[i]}")
#Shortest Job First
def sjf(bt):
    n = len(bt)
    wt = [0] * n
    tat = [0] * n
    bt_copy = sorted(bt)
    wt[0] = 0
    tat[0] = bt_copy[0]
    for i in range(1, n):
        wt[i] = sum(bt_copy[:i])
        tat[i] = wt[i] + bt_copy[i]
    
    print("SJF Scheduling:")
    print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
    for i in range(n):
        print(f"{i + 1}\t{bt_copy[i]}\t{wt[i]}\t{tat[i]}")
#Shortest Remaining Time First
def srtf(bt):
    n = len(bt)
    wt = [0] * n
    tat = [0] * n
    rt = bt.copy()
    complete = 0
    t = 0
    while complete < n:
        min_time = float('inf')
        shortest = 0
        for i in range(n):
            if rt[i] > 0 and rt[i] < min_time:
                min_time = rt[i]
                shortest = i
        rt[shortest] -= 1
        if rt[shortest] == 0:
            complete += 1
            tat[shortest] = t + 1
            wt[shortest] = tat[shortest] - bt[shortest]
        t += 1
    
    print("SRTF Scheduling:")
    print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
    for i in range(n):
        print(f"{i + 1}\t{bt[i]}\t{wt[i]}\t{tat[i]}")
#Priority Preemptive
def priority_preemptive(bt, pr):
    n = len(bt)
    wt = [0] * n
    tat = [0] * n
    rt = bt.copy()
    complete = 0
    t = 0
    while complete < n:
        max_priority = -1
        highest = 0
        for i in range(n):
            if rt[i] > 0 and pr[i] > max_priority:
                max_priority = pr[i]
                highest = i
        rt[highest] -= 1
        if rt[highest] == 0:
            complete += 1
            tat[highest] = t + 1
            wt[highest] = tat[highest] - bt[highest]
        t += 1
    
    print("Priority Preemptive Scheduling:")
    print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
    for i in range(n):
        print(f"{i + 1}\t{bt[i]}\t{wt[i]}\t{tat[i]}")
#Priority Non Preemptive
def priority_non_preemptive(bt, pr):
    n = len(bt)
    wt = [0] * n
    tat = [0] * n
    proc = sorted(zip(pr, bt), reverse=True)
    bt_copy = [p[1] for p in proc]
    wt[0] = 0
    tat[0] = bt_copy[0]
    for i in range(1, n):
        wt[i] = sum(bt_copy[:i])
        tat[i] = wt[i] + bt_copy[i]
    
    print("Priority Non-Preemptive Scheduling:")
    print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
    for i in range(n):
        print(f"{i + 1}\t{bt_copy[i]}\t{wt[i]}\t{tat[i]}")

def main():
    n = int(input("Enter number of processes: "))
    bt = [int(x) for x in input("Enter burst times for {} processes:\n".format(n)).split()]
    
    pr = []
    choice = int(input("Choose Scheduling Algorithm:\n1. FCFS\n2. SJF\n3. SRTF\n4. Priority Preemptive\n5. Priority Non-Preemptive\n"))
    
    if choice in [4, 5]:
        pr = [int(x) for x in input("Enter priorities for {} processes:\n".format(n)).split()]
    
    if choice == 1:
        fcfs(bt)
    elif choice == 2:
        sjf(bt)
    elif choice == 3:
        srtf(bt)
    elif choice == 4:
        priority_preemptive(bt, pr)
    elif choice == 5:
        priority_non_preemptive(bt, pr)
    else:
        print("Invalid choice.")

if __name__ == "__main__":
    main()

    `,
    },
    // Add more languages and their corresponding merge sort code here
  ];

