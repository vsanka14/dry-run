# Building a Modern Terminal-Based Development Workflow: A Complete Guide

_A journey from GUI dependency to terminal mastery with WezTerm, Zsh, and Neovim_

## Overview

This multi-part series documents the complete transformation from a traditional GUI-based development setup to a powerful, customized terminal-first workflow. After years of wanting to learn Neovim and embrace a terminal-first approach, everything finally "clicked" when I discovered the perfect combination of tools and, most importantly, the right learning methodology.

**This isn't just a configuration guide—it's a story of how I finally found a way to learn complex tools that worked for me, using OpenCode as a patient tutor alongside discoverable tools like AstroNvim.**

The breakthrough came from two key realizations:

1. **AstroNvim makes Neovim discoverable** - No more memorizing hundreds of keybindings
2. **OpenCode can be your patient sensei** - Available in one tab while you work in another

_Note: This is primarily documentation for my own journey. If others find it useful for their terminal workflow transition, that's a bonus._

## The Complete Stack

**Terminal Emulator**: WezTerm with custom theming and aesthetics  
**Shell**: Zsh with custom bordered prompt and enhanced file listings  
**Editor**: Neovim with AstroNvim framework  
**Development Tools**: OpenCode integration, Git workflow optimization  
**Environment Management**: NVM, Bun, comprehensive dotfiles

---

## Part 1: Setting the Foundation - Why Terminal First?

### The Problem with GUI Fragmentation

Most developers today juggle multiple applications:

- A separate terminal app
- A code editor (VS Code, IntelliJ, etc.)
- Git GUI clients
- File managers
- Multiple browser windows for documentation

This fragmentation creates context switching overhead and inconsistent experiences across different tools.

### The Terminal-First Philosophy

A terminal-first approach consolidates your entire development environment into a single, highly customizable interface where:

- Everything is keyboard-driven for maximum efficiency
- Configurations are portable and version-controlled
- The environment is consistent across different machines
- Customization possibilities are limitless

### The Learning Breakthrough

The game-changer wasn't just the tools themselves, but discovering a learning methodology that actually worked:

**OpenCode as a Sensei**: Instead of struggling through documentation alone, I kept OpenCode running in one terminal tab while working in Neovim in another. When I needed help—"please setup LSP," "please configure Prettier auto-format on save"—OpenCode would just do it. This removed the intimidation factor from Neovim configuration.

**AstroNvim for Discoverability**: AstroNvim solved the memorization problem. Press `y` and get a popup showing `y$` or `y}`. Press Space (leader) and discover file searching (`hf`) or explorer toggling (`he`). No more blank stare moments wondering "what was that keybinding again?"

**Tab Switching Workflow**: `Cmd+1` for OpenCode, `Cmd+2` for Neovim. This rapid context switching between learning and doing became incredibly natural and effective.

### What We'll Build

By the end of this series, you'll have:

- A beautiful, functional terminal with custom theming
- A shell environment that makes file navigation and command execution a joy
- A powerful editor that rivals any modern IDE
- Automated dotfiles management for easy setup on new machines
- Git integration that provides GitLens-like functionality
- OpenCode integration for AI-powered development assistance

---

## Part 2: The Terminal Experience - WezTerm Configuration

WezTerm serves as the foundation of our terminal-first workflow. Unlike basic terminal emulators, WezTerm offers extensive customization capabilities through Lua configuration.

### Key Features Implemented

#### 1. Custom Color Scheme

```lua
config.colors = {
  foreground = "#A0FFFF", -- Light cyan text
  background = "#000000", -- Deep black background

  -- ANSI colors for vibrant file listings
  ansi = {
    "#2E3440", -- black
    "#FF6B9D", -- hot pink for errors
    "#32CD32", -- lime green for executables
    "#FFD700", -- gold for directories
    "#87CEEB", -- sky blue for links
    "#FF69B4", -- hot pink for special files
    "#00FFFF", -- cyan for other types
    "#FFFFFF", -- white for regular text
  },
}
```

#### 2. Background Aesthetics with Productivity Balance

- Custom background image (Tokyo coffee shop theme)
- Carefully tuned opacity and brightness for readability
- No blur effects to maintain text clarity

#### 3. Productivity-Focused Key Bindings

- `Cmd+Shift+←/→`: Move tabs efficiently
- `Cmd+K`: Clear scrollback (essential for long sessions)
- `Cmd+A`: Copy entire buffer content
- `Ctrl+Alt+1-8`: Move tabs to specific positions

#### 4. Typography and Visual Optimization

- JetBrains Mono Bold at 15pt for excellent readability
- Blinking bar cursor for better visibility
- Native macOS title bar for system integration
- Smart tab management with increased width limits

### Configuration Highlights

The WezTerm configuration (`wezterm/wezterm.lua`) demonstrates several advanced techniques:

**Background Management**:

```lua
config.background = {
  {
    source = { File = "/path/to/background.png" },
    hsb = { brightness = 0.05 }, -- Heavily dimmed for readability
    opacity = 1.0,
  },
}
```

**Custom Key Actions**:

```lua
{
  key = "a",
  mods = "CMD",
  action = wezterm.action_callback(function(window, pane)
    local dims = pane:get_dimensions()
    local txt = pane:get_text_from_region(0, dims.scrollback_top, 0, dims.scrollback_top + dims.scrollback_rows)
    window:copy_to_clipboard(txt:match("^%s*(.-)%s*$"))
  end),
}
```

---

## Part 3: Shell Power-Up - Zsh and Command Line Mastery

The shell is where you'll spend most of your time, so making it both functional and visually appealing is crucial.

### Custom Prompt Design

The heart of the shell experience is a custom prompt that provides visual context without clutter:

```bash
PROMPT='%K{black}%F{yellow} ▌%(!.%1~.%~) ▐%f%k %F{cyan}$ %f'
```

This creates:

- A bordered, highlighted path display with black background and yellow text
- Clear visual separation between path and command input
- Cyan command prompt for easy distinction

### Enhanced File Listings with Eza

Traditional `ls` is replaced with `eza` for colorful, informative file listings:

```bash
alias ls='eza --icons --color=always'
alias ll='eza -lh --icons --color=always --git'
alias la='eza -lah --icons --color=always --git'
alias lt='eza --tree --level=2 --icons --color=always'
alias tree='eza --tree --icons --color=always'
```

Benefits:

- File type icons for immediate visual recognition
- Git status integration in file listings
- Beautiful color coding that complements the WezTerm theme
- Tree views for directory exploration

### Environment Management

**Node.js Ecosystem**:

- NVM for Node.js version management
- Bun for fast package management and runtime
- Proper PATH configuration for seamless tool switching

**Color Configuration**:

- Custom LS_COLORS for consistent file type highlighting
- LSCOLORS for macOS compatibility
- Color schemes that work harmoniously with WezTerm

---

## Part 4: The Editor - Neovim with AstroNvim

Neovim with the AstroNvim framework provides a VS Code-like experience with terminal efficiency.

### Why AstroNvim?

AstroNvim solved the biggest barrier to Neovim adoption: **discoverability**. 

The traditional Neovim learning curve looks like this:
1. Memorize hundreds of keybindings
2. Learn Lua configuration syntax
3. Research and configure dozens of plugins
4. Spend weeks reading documentation
5. Give up and go back to VS Code

AstroNvim flips this on its head:

**Visual Discovery System**:
- Press `y` → Get a popup showing `y$` (yank to end of line), `y}` (yank to next paragraph), etc.
- Press `Space` (leader) → Discover `hf` (find files), `he` (toggle explorer), `gg` (open Git interface)
- Every action reveals related actions in real-time

**No More Memorization**:
Instead of frantically googling "how to search files in neovim," you press Space and see the options right there. Instead of wondering "what can I do with this selected text," you see the possibilities immediately.

**Confidence Building**:
This discoverable interface means you're never stuck. There's always a visual hint about what you can do next. This removes the anxiety of "breaking" your editor or forgetting important commands.

**The Learning Accelerator**:
AstroNvim doesn't just provide the configuration—it teaches you Neovim patterns through use. You start to internalize the logic: Space for top-level actions, specific keys for text objects, etc.

AstroNvim offers:

- Sensible defaults for modern development
- Extensive plugin ecosystem with careful curation
- LSP integration out of the box
- Beautiful UI with proper theming
- Community-driven plugin collections

### Key Configurations

#### Core Settings (`astrocore.lua`)

```lua
options = {
  opt = {
    relativenumber = true,  -- Relative line numbers for efficient navigation
    number = true,          -- Show current line number
    spell = false,          -- Disable spell check for code
    signcolumn = "yes",     -- Always show sign column for consistency
    wrap = false,           -- No line wrapping for code
  },
}
```

#### Custom Key Mappings

- `jk` in insert mode: Quick escape (faster than reaching for ESC)
- Git integration hotkeys for blame, diff viewing, and staging
- Buffer navigation improvements
- GitLens-like functionality throughout

#### Git Integration (`user.lua`)

Comprehensive Git workflow similar to VS Code's GitLens:

**Gitsigns Configuration**:

- Current line blame display
- Hunk navigation and staging
- Preview capabilities
- Custom formatting for blame information

**Diffview Integration**:

- Full-featured diff viewer
- File history exploration
- Project-wide change visualization

**Neogit Interface**:

- Magit-inspired Git interface
- Interactive staging and committing
- Integration with diff tools

### Plugin Ecosystem Highlights

**LSP and Completion**:

- Blink-cmp for fast autocompletion
- Mason for LSP server management
- Treesitter for enhanced syntax highlighting
- Conform for code formatting

**Git Tools**:

- git-blame.nvim for line-by-line attribution
- diffview.nvim for advanced diff capabilities
- neogit for comprehensive Git interface
- gitsigns.nvim for in-buffer Git indicators

**UI Enhancement**:

- Custom dashboard with ASCII art
- Presence.nvim for Discord Rich Presence
- LSP signature help for function parameters
- Enhanced autopairs with custom rules

---

## Part 5: Developer Workflow Integration

### Dotfiles Management Strategy

The entire configuration is managed as a Git repository in `~/.config`, providing:

**Version Control Benefits**:

- Track configuration changes over time
- Experiment with new settings safely
- Share configurations across team members
- Document configuration decisions

**Symlink Automation**:

```bash
#!/bin/bash
# setup_symlinks.sh - Automated dotfile linking
echo "Setting up dotfiles symlinks..."
rm ~/.zshrc 2>/dev/null
ln -s ~/.config/zshrc ~/.zshrc
echo "✅ Symlink created successfully"
```

### Cross-Machine Setup

The setup is designed for easy replication:

1. Clone the config repository
2. Run the symlink setup script
3. Install terminal dependencies (WezTerm, eza, Node.js tools)
4. Launch Neovim to auto-install plugins

### OpenCode Integration: The Game-Changing Learning Method

The real breakthrough in my Neovim learning journey was discovering OpenCode could operate on my `~/.config` directory and become an incredibly patient, knowledgeable tutor.

**The Two-Tab Workflow**:
- **Tab 1**: OpenCode running in my config directory
- **Tab 2**: Neovim for actual coding
- **Switching**: `Cmd+1` and `Cmd+2` for instant context switching

**How OpenCode Became My Neovim Sensei**:

OpenCode eliminated the intimidation factor that had kept me from diving deep into Neovim. Instead of:
- Struggling through dense documentation
- Copy-pasting configurations I didn't understand
- Getting stuck on syntax errors in Lua configs
- Feeling overwhelmed by the vast ecosystem

I could simply ask:
- "Please setup the LSP for TypeScript"
- "Please configure Prettier auto-format on save"
- "Help me add better Git integration"
- "How do I configure this plugin properly?"

OpenCode would not only implement the solution but explain what it was doing, teaching me the patterns and conventions of Neovim configuration along the way.

**Learning by Doing**:
This approach let me:
- Get immediate results (dopamine hit!)
- Learn incrementally without getting overwhelmed
- Build confidence through successful configurations
- Ask follow-up questions when I didn't understand something
- Iterate quickly on my setup

**The Confidence Builder**:
What used to be a daunting black box became an exciting playground. I went from knowing "a bit of vim" to feeling genuinely confident navigating and customizing Neovim as my primary IDE. The fear of breaking my config disappeared when I had OpenCode there to help fix any issues.

This methodology worked so well that I'm convinced it's replicable for learning other complex tools. The key is having an AI tutor that can operate in your actual working environment, not just give you generic examples.

---

## Part 6: Power User Tips and Advanced Customization

### Workflow Optimizations

**The Cmd+1, Cmd+2 Workflow - Terminal Tab Mastery**:

One of my proudest achievements is perfecting the two-tab workflow:
- **Tab 1**: OpenCode as my patient tutor and configuration assistant
- **Tab 2**: Neovim for actual development work
- **Switching**: `Cmd+1` and `Cmd+2` for instant, frictionless context switching

This isn't just about convenience—it's about creating a learning environment where help is always one keystroke away. When I hit a wall in Neovim, `Cmd+1` gets me instant access to guidance without breaking my flow.

**Terminal Session Management**:

- Use WezTerm tabs for different projects
- Custom key bindings for rapid tab switching
- Background image that's aesthetically pleasing but doesn't interfere with work

**Git Workflow Excellence**:

- Extensive keybinding setup for all Git operations
- Visual diff tools integrated into the editor
- Blame information accessible without leaving the editor
- Staging and committing from within Neovim

**File Navigation**:

- Tree-style directory listings with eza
- Icon-based file type recognition
- Git status integration in file listings
- Custom aliases for common navigation patterns

### Maintenance and Evolution

**Plugin Management**:

- Lazy.nvim for efficient plugin loading
- Regular updates to AstroCommunity plugins
- Custom plugin configurations that override defaults thoughtfully

**Configuration Iteration**:

- Comment configurations thoroughly for future reference
- Use modular configuration files for maintainability
- Test changes in isolation before committing
- Document customizations that deviate from defaults

### Performance Considerations

**Startup Optimization**:

- Lazy loading for plugins that aren't immediately needed
- Efficient colorscheme with minimal resource usage
- Terminal settings tuned for responsiveness

**Memory Management**:

- Large file handling optimizations in Neovim
- Buffer management strategies
- Efficient use of LSP servers

---

## Conclusion

This terminal-first setup provides:

✅ **Consistency**: Same environment across all machines  
✅ **Performance**: Fast, lightweight, and responsive  
✅ **Customization**: Every aspect tailored to personal workflow  
✅ **Portability**: Entire setup in version-controlled dotfiles  
✅ **Productivity**: Keyboard-driven interface with minimal context switching  
✅ **Aesthetics**: Beautiful, functional environment that's pleasant to use

### Key Takeaways

1. **Start with solid foundations**: Choose tools with strong customization capabilities (WezTerm, Neovim)
2. **Iterate gradually**: Build up your configuration over time rather than copying everything at once
3. **Document your choices**: Comment your configurations and understand what each setting does
4. **Version control everything**: Use Git to track your dotfiles and experiment safely
5. **Focus on workflow**: Every customization should serve a functional purpose
6. **Embrace the learning curve**: Terminal mastery takes time but pays dividends in productivity

### What Made the Difference - The Two Key Breakthroughs

**Breakthrough #1: AstroNvim's Discoverability**
AstroNvim transformed Neovim from an intimidating text editor into an approachable, discoverable IDE. The visual popup system meant I could learn vim motions and Neovim features organically through exploration rather than memorization.

**Breakthrough #2: OpenCode as a Learning Partner** 
Having OpenCode available in Tab 1 while working in Neovim in Tab 2 created the perfect learning environment. Instead of getting stuck and frustrated, I could instantly get help, understand what was happening, and continue progressing.

**The Synergy Effect**:
These tools working together created something greater than the sum of their parts:
- WezTerm's beautiful theming made the environment pleasant to spend hours in
- Zsh's enhanced prompt and file listings made navigation a joy
- Neovim with AstroNvim provided a powerful, discoverable editing experience
- OpenCode eliminated learning friction and built confidence
- Version-controlled dotfiles made everything portable and safe to experiment with

**The Confidence Factor**:
What I'm most proud of is achieving a solid foundation for using Neovim as my main IDE. It feels super fast and snappy, and incredibly satisfying to fly through codebases. The combination of visual discoverability (AstroNvim) and AI tutoring (OpenCode) finally made complex tools learnable for me.

**Learning Methodology Discovery**:
Perhaps most importantly, I discovered a learning approach that works: having an AI tutor that can operate in my actual working environment, combined with tools designed for discoverability. This methodology feels replicable for learning other complex development tools.

This isn't just a collection of configurations—it's a cohesive development environment that makes coding faster, more enjoyable, and more efficient. More importantly, it's a system that continues to teach me as I use it.

---

## Technical Details and Configuration Files

### File Structure

```
~/.config/
├── nvim/                 # Neovim configuration
│   ├── init.lua         # Bootstrap file
│   ├── lua/
│   │   ├── community.lua        # AstroCommunity imports
│   │   ├── lazy_setup.lua       # Lazy.nvim configuration
│   │   ├── polish.lua           # Final setup hooks
│   │   └── plugins/             # Plugin configurations
│   │       ├── astrocore.lua    # Core AstroNvim settings
│   │       ├── astroui.lua      # UI and theming
│   │       ├── user.lua         # Custom plugins and overrides
│   │       └── [other plugin configs]
├── wezterm/
│   └── wezterm.lua      # WezTerm configuration
├── zshrc                # Zsh shell configuration
├── .gitconfig           # Git settings
├── setup_symlinks.sh    # Automation script
└── README.md           # Setup documentation
```

### Next Steps

Future improvements could include:

- Tmux integration for session management
- Additional language-specific configurations
- Advanced Git workflow automation
- Custom scripts for common development tasks
- Integration with cloud-based development environments

The beauty of this setup is that it's never "finished"—it evolves with your needs and continues to improve your development experience over time.
