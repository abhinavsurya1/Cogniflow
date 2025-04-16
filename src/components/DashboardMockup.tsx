import { motion } from "framer-motion";
import { Sparkles, Binary, Cpu, Atom, Database, BarChart2, Zap, Shield, Code, Brain } from "lucide-react";

const DashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative"
    >
      {/* Enhanced Dashboard Mockup */}
      <div className="glass-card rounded-3xl overflow-hidden border border-white/20 shadow-lg aspect-[4/3] relative scanner cyberpunk-grid">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-16 -left-16 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        {/* Particle Effect Background - Now with more particles and improved animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array(40).fill(0).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${
                i % 3 === 0 
                  ? "bg-neon-purple" 
                  : i % 3 === 1 
                    ? "bg-neon-blue" 
                    : "bg-neon-green"
              } rounded-full`}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                opacity: [0.2, 0.8, 0.2],
                scale: [
                  Math.random() * 0.5 + 0.5,
                  Math.random() * 1 + 1,
                  Math.random() * 0.5 + 0.5,
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="relative h-full w-full bg-gradient-to-br from-black/40 to-black/70 p-6 flex flex-col z-10">
          {/* Top Navigation Bar with improved animations and effects */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <motion.div 
                className="relative w-6 h-6 overflow-hidden"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    "0 0 0 rgba(139, 92, 246, 0)", 
                    "0 0 10px rgba(139, 92, 246, 0.7)", 
                    "0 0 0 rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-80" />
                <div className="absolute inset-2 rounded-full bg-black" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-80" />
              </motion.div>
              <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                Cogni<span className="text-neon-purple">flow</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 bg-red-500 rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 bg-yellow-500 rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
            </div>
          </div>
          
          {/* Dashboard Content - Now with more interactive elements and data visualization */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {/* Main Content Area - Enhanced with more realistic data and interactions */}
            <div className="col-span-2 glass bg-black/30 rounded-lg p-4 relative overflow-hidden">
              {/* Animated header with glitch effect */}
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-5 w-5 text-neon-purple" />
                </motion.div>
                <div 
                  className="h-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded overflow-hidden relative text-xs text-white flex items-center px-2 w-44 font-mono"
                  data-text="NEURAL.NETWORK.ANALYTICS"
                >
                  <span className="glitch" data-text="NEURAL.NETWORK.ANALYTICS">NEURAL.NETWORK.ANALYTICS</span>
                </div>
              </motion.div>
              
              {/* Animated metrics with hover effects */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: <BarChart2 className="h-3 w-3" />, label: "MODEL ACCURACY", value: "98.2%", color: "from-neon-purple" },
                  { icon: <Zap className="h-3 w-3" />, label: "INFERENCE TIME", value: "0.42ms", color: "from-neon-blue" },
                  { icon: <Shield className="h-3 w-3" />, label: "SECURITY SCORE", value: "A+", color: "from-neon-green" },
                  { icon: <Database className="h-3 w-3" />, label: "DATA PROCESSED", value: "8.4TB", color: "from-neon-pink" }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 backdrop-blur-lg rounded-lg p-2 border border-white/10 hover:bg-white/10 transition-colors group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <motion.div 
                          className={`bg-gradient-to-r ${metric.color} to-transparent rounded-full p-0.5`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          {metric.icon}
                        </motion.div>
                        <div className="text-[10px] text-white/70">{metric.label}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-neon-purple opacity-70 group-hover:opacity-100 group-hover:animate-pulse" />
                    </div>
                    <div className="mt-1 flex items-end justify-between">
                      <div className="h-3 w-16 bg-gradient-to-r from-white/60 to-white/20 rounded-sm overflow-hidden">
                        <motion.div
                          className={`h-full w-full bg-gradient-to-r ${metric.color} to-white/20`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 0.7 + i * 0.1 }}
                          transition={{
                            duration: 1.5,
                            delay: 0.5 + i * 0.2,
                          }}
                        />
                      </div>
                      <motion.div 
                        className="text-xs font-mono text-neon-blue"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {metric.value}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced animated chart */}
              <div className="mt-2 h-24 rounded-lg bg-black/20 overflow-hidden relative">
                <div className="absolute inset-0 grid grid-cols-8 gap-4 p-1">
                  {Array(8).fill(0).map((_, i) => (
                    <div key={i} className="border-r border-white/5 h-full" />
                  ))}
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="border-b border-white/5 w-full absolute" style={{ top: `${25 * (i+1)}%` }} />
                  ))}
                </div>
                
                <div className="h-full w-full flex items-end px-1 relative">
                  {Array(24).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 mx-px group"
                      whileHover={{ scale: 1.1 }}
                      initial={{ height: "0%" }}
                    >
                      <motion.div
                        className={`bg-gradient-to-t ${
                          i % 3 === 0 
                            ? "from-neon-purple to-neon-blue" 
                            : i % 3 === 1 
                              ? "from-neon-blue to-neon-green"
                              : "from-neon-green to-neon-purple"
                        } rounded-t-sm opacity-70 h-full w-full`}
                        animate={{ 
                          height: `${10 + Math.sin(i / 4) * 50 + Math.random() * 20}%`,
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                        style={{ left: `calc(${(i+0.5) * 100 / 24}%)` }}
                        animate={{
                          y: [0, -5, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Moving line tracker */}
                  <motion.div
                    className="absolute h-full w-0.5 bg-neon-blue/30 top-0"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-neon-blue absolute -top-1 -left-1 shadow-lg blue-glow" />
                  </motion.div>
                </div>
              </div>
              
              {/* Interactive controls with 3D effect */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { icon: <Binary className="h-4 w-4" />, color: "from-neon-blue", label: "DATA" },
                  { icon: <Cpu className="h-4 w-4" />, color: "from-neon-purple", label: "MODEL" },
                  { icon: <Atom className="h-4 w-4" />, color: "from-neon-green", label: "TRAIN" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`bg-gradient-to-br ${item.color} to-black/60 h-10 rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden group`}
                    whileHover={{ 
                      y: -2, 
                      boxShadow: `0 0 12px 0 var(--primary)`,
                      scale: 1.02
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="text-xs font-mono hidden group-hover:block">{item.label}</span>
                    </div>
                    
                    {/* Particles on hover */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {Array(5).fill(0).map((_, j) => (
                        <motion.div
                          key={j}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ 
                            x: "50%", 
                            y: "50%" 
                          }}
                          animate={{
                            x: `${50 + (Math.random() * 60 - 30)}%`,
                            y: `${50 + (Math.random() * 60 - 30)}%`,
                            opacity: [1, 0],
                            scale: [0, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            delay: j * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sidebar with improved interaction and 3D effects */}
            <div className="glass bg-black/30 rounded-lg p-3 flex flex-col relative overflow-hidden">
              <motion.div
                className="absolute -right-10 -top-10 w-20 h-20 bg-neon-purple/20 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-neon-purple"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="h-3.5 w-16 bg-gradient-to-r from-neon-purple to-transparent rounded text-[8px] flex items-center pl-1 font-mono">
                    NEURAL.CORE
                  </div>
                </div>
                <motion.div 
                  className="h-4 w-4 rounded-full bg-neon-purple flex items-center justify-center cursor-pointer relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-[8px] font-bold">AI</span>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 8px rgba(139, 92, 246, 0.7)",
                        "0 0 0px rgba(139, 92, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Sidebar items with enhanced 3D and hover effects */}
              <div className="space-y-2 flex-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`h-10 ${i === 2 ? 'bg-gradient-to-r from-neon-purple to-neon-blue/50' : 'bg-white/5'} rounded-lg relative overflow-hidden flex items-center px-2 cursor-pointer group`}
                    whileHover={{ 
                      backgroundColor: "rgba(255,255,255,0.1)",
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  >
                    {i === 2 && (
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                    <div className="flex items-center gap-2 w-full">
                      <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-white' : 'bg-white/30'}`} />
                      <div className={`h-2 w-16 ${i === 2 ? 'bg-white/70' : 'bg-white/20'} rounded-full`} />
                      
                      <motion.div
                        className="ml-auto mr-1 w-3 h-3 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.2 }}
                      >
                        {i === 2 && (
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-white"
                            animate={{
                              scale: [1, 1.5, 1],
                              boxShadow: [
                                "0 0 0px rgba(255,255,255,0)",
                                "0 0 3px rgba(255,255,255,0.7)",
                                "0 0 0px rgba(255,255,255,0)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>
                    
                    {/* 3D Rotation on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ 
                        transformStyle: "preserve-3d",
                      }}
                      animate={{ 
                        rotateX: i === 2 ? [0, -2, 0, 2, 0] : [0, 0],
                        rotateY: i === 2 ? [0, 3, 0, -3, 0] : [0, 0], 
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Animated status section with holographic effect */}
              <motion.div
                className="mt-4 bg-gradient-to-br from-black/60 to-black/40 border border-white/5 rounded-lg p-2 backdrop-blur-md relative overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0"
                    animate={{
                      left: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              
                <div className="flex items-center justify-between mb-2 relative">
                  <div className="flex items-center gap-1">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <div className="h-2 w-2 rounded-full bg-neon-blue" />
                    </motion.div>
                    <div className="h-2 w-10 bg-white/40 rounded-full text-[7px] flex items-center pl-1 text-white/70 font-mono">
                      STORAGE
                    </div>
                  </div>
                  <Database className="h-3 w-3 text-neon-blue" />
                </div>
                
                <div className="bg-black/40 h-3 w-full rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    initial={{ width: "0%" }}
                    animate={{
                      width: "72%",
                    }}
                    transition={{
                      duration: 2,
                      delay: 1,
                    }}
                  />
                  
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-white/40"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <div className="text-[10px] text-white/50 mt-1 font-mono">7.2 GB / 10 GB</div>
                </div>
                
                {/* Holographic particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array(8).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-neon-blue/70 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%"
                      }}
                      animate={{
                        x: [
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%"
                        ],
                        y: [
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%"
                        ],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Action Bar with floating 3D elements */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[
              { active: true, color: "from-neon-blue to-neon-purple" },
              { active: false },
              { active: false },
              { active: false },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`h-12 rounded-lg border ${
                  item.active 
                    ? `bg-gradient-to-r ${item.color} border-white/20` 
                    : 'bg-white/5 border-white/5'
                } relative overflow-hidden cursor-pointer`}
                whileHover={{ 
                  scale: 1.03,
                  zIndex: 10,
                  border: "1px solid rgba(255,255,255,0.3)",
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {item.active && (
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                )}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.active ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotateY: [0, 360] }}
                      transition={{ 
                        scale: { delay: 1.5, type: "spring" },
                        rotateY: { duration: 4, repeat: Infinity, ease: "linear" }
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Sparkles className="h-5 w-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-5 h-1.5 bg-white/20 rounded-full" />
                    </motion.div>
                  )}
                </div>
                
                {/* 3D floating effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotateX: [0, -5, 0, 5, 0],
                    rotateY: [0, 10, 0, -10, 0],
                    z: [0, 10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 10, 0],
          transition: {
            repeat: Infinity,
            duration: 3,
          },
        }}
        className="absolute -top-6 right-24 glass p-3 rounded-xl shadow-lg"
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Brain className="h-6 w-6 text-neon-purple" />
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
          rotateZ: [0, -5, 0],
          transition: {
            repeat: Infinity,
            duration: 4,
            delay: 1,
          },
        }}
        className="absolute top-1/3 -right-8 glass p-3 rounded-xl shadow-lg blue-glow"
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Cpu className="h-6 w-6 text-neon-blue" />
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
          rotate: [0, 5, 0],
          transition: {
            repeat: Infinity,
            duration: 5,
            delay: 0.5,
          },
        }}
        className="absolute -bottom-6 left-1/4 glass p-3 rounded-xl shadow-lg green-glow"
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 10, 0, -10, 0],
          }}
          transition={{
            rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 3, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Atom className="h-6 w-6 text-neon-green" />
        </motion.div>
      </motion.div>
      
      {/* Holographic particles around the dashboard */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array(20).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#3B82F6" : "#10B981",
            }}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: [
                Math.random() * 120 - 10 + "%",
                Math.random() * 120 - 10 + "%",
                Math.random() * 120 - 10 + "%"
              ],
              y: [
                Math.random() * 120 - 10 + "%",
                Math.random() * 120 - 10 + "%",
                Math.random() * 120 - 10 + "%"
              ],
              scale: [0, Math.random() * 1 + 0.5, 0],
              opacity: [0, 0.8, 0],
              boxShadow: [
                "0 0 0px rgba(139, 92, 246, 0)",
                "0 0 10px rgba(139, 92, 246, 0.7)",
                "0 0 0px rgba(139, 92, 246, 0)"
              ]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardMockup;
