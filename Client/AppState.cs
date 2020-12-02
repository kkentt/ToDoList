using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Client
{
    public class AppState
    {
        //public BackgroundColorModel bgColorModel = new BackgroundColorModel();
        public string DefaultColor { get; set; } = "#b3dfc4";
        public bool IsRandomColored { get; private set; } = true;
        public event Action<bool> StateChanged;
        private void NotifyStateChanged(bool Property)
        {
            StateChanged?.Invoke(Property);
        }

        public void SetIsRandomColored(bool value)
        {
            IsRandomColored = value;
            NotifyStateChanged(IsRandomColored);
        }

        public async Task<string> GetRandomColor()
        {
            var random = new Random();
            var color = String.Format("#{0:X6}", random.Next(0x1000000)); // = "#A197B9"
            return color;
        }
    }
}
