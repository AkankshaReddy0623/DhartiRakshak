import React, { useState } from 'react';
import { 
  Leaf, Trophy, Users, Target, Award, Star, MapPin, Calendar, ChevronRight, 
  Zap, TrendingUp, CheckCircle, Shield, Crown, Camera, Brain, Coins,
  MessageCircle, Globe, Sparkles, TreePine, Droplets, Bug, Gift
} from 'lucide-react';

interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  progress: number;
  deadline: string;
  completed: boolean;
  type: 'individual' | 'guild' | 'boss';
  reward?: string;
}

interface Guild {
  id: string;
  name: string;
  logo: string;
  members: number;
  level: number;
  currentChallenge: string;
  progress: number;
  rank: number;
}

interface Farmer {
  name: string;
  location: string;
  cropType: string;
  farmSize: string;
  sustainabilityScore: number;
  level: number;
  totalPoints: number;
  greenCredits: number;
  badges: string[];
  rank: number;
  guild?: string;
  title: string;
  auraHealth: number;
  streakDays: number;
}

interface LeaderboardEntry {
  name: string;
  location: string;
  score: number;
  rank: number;
  avatar: string;
  title: string;
  guild?: string;
}

interface BossChallenge {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  participants: number;
  reward: string;
  timeLeft: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAIOracle, setShowAIOracle] = useState(false);

  const farmer: Farmer = {
    name: 'Rajesh Kumar',
    location: 'Satara, Maharashtra',
    cropType: 'Mixed (Rice, Sugarcane)',
    farmSize: '5.2 acres',
    sustainabilityScore: 78,
    level: 7,
    totalPoints: 2450,
    greenCredits: 340,
    badges: ['Organic Pioneer', 'Water Saver', 'Soil Guardian', 'Bio Pest Controller'],
    rank: 12,
    guild: 'Basmati Brigade',
    title: 'Dharti Rakshak',
    auraHealth: 82,
    streakDays: 15
  };

  const guild: Guild = {
    id: '1',
    name: 'Basmati Brigade',
    logo: '🌾',
    members: 24,
    level: 5,
    currentChallenge: 'Village-wide Drip Irrigation',
    progress: 67,
    rank: 3
  };

  const bossChallenge: BossChallenge = {
    id: 'chemical-asur',
    name: 'Chemical Asur',
    description: 'Unite to defeat excessive pesticide use in your region',
    icon: Bug,
    progress: 45,
    participants: 156,
    reward: 'Pest-Master Badge + 500 Green Credits',
    timeLeft: '12 days'
  };

  const quests: Quest[] = [
    {
      id: '1',
      title: 'Switch to Bio-Pesticides',
      description: 'Replace chemical pesticides with neem oil and organic alternatives for 3 weeks',
      category: 'Pest Management',
      difficulty: 'Medium',
      points: 150,
      progress: 65,
      deadline: '2025-02-15',
      completed: false,
      type: 'individual',
      reward: 'Pest-Buster Badge'
    },
    {
      id: '2',
      title: 'Guild Challenge: Village Drip System',
      description: 'Work with Basmati Brigade to install drip irrigation across 50 acres',
      category: 'Water Management',
      difficulty: 'Hard',
      points: 300,
      progress: 67,
      deadline: '2025-03-01',
      completed: false,
      type: 'guild',
      reward: 'Water Guardian Title'
    },
    {
      id: '3',
      title: 'Defeat the Chemical Asur',
      description: 'Join the community boss battle against excessive pesticide use',
      category: 'Community Challenge',
      difficulty: 'Hard',
      points: 500,
      progress: 45,
      deadline: '2025-02-20',
      completed: false,
      type: 'boss',
      reward: 'Asur Slayer Badge + 500 Credits'
    },
    {
      id: '4',
      title: 'Composting Challenge',
      description: 'Create organic compost using farm waste and kitchen scraps',
      category: 'Soil Health',
      difficulty: 'Easy',
      points: 100,
      progress: 100,
      deadline: '2025-01-20',
      completed: true,
      type: 'individual'
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    { name: 'Amit Patil', location: 'Pune', score: 3200, rank: 1, avatar: 'AP', title: 'Maha Dharti Rakshak', guild: 'Millet Mavericks' },
    { name: 'Sunita Devi', location: 'Kolhapur', score: 2980, rank: 2, avatar: 'SD', title: 'Prakriti Sevak', guild: 'Green Guardians' },
    { name: 'Mohan Singh', location: 'Nashik', score: 2750, rank: 3, avatar: 'MS', title: 'Jal Rakshak', guild: 'Water Warriors' },
    { name: 'Priya Sharma', location: 'Aurangabad', score: 2650, rank: 4, avatar: 'PS', title: 'Bhoomi Mata', guild: 'Soil Sisters' },
    { name: 'Rajesh Kumar', location: 'Satara', score: 2450, rank: 5, avatar: 'RK', title: 'Dharti Rakshak', guild: 'Basmati Brigade' }
  ];

  const dailyRiddle = {
    question: "Which traditional companion plant helps repel aphids from tomatoes?",
    options: ["Marigold", "Mint", "Basil", "All of the above"],
    correct: 3,
    reward: "25 Green Credits + Knowledge Keeper Badge"
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQuestTypeColor = (type: string) => {
    switch (type) {
      case 'individual': return 'bg-blue-100 text-blue-800';
      case 'guild': return 'bg-purple-100 text-purple-800';
      case 'boss': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getAuraColor = (health: number) => {
    if (health >= 80) return 'from-green-400 to-emerald-600';
    if (health >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgriGame</h1>
                <p className="text-sm text-gray-600">Dharti Rakshak Platform</p>
              </div>
            </div>
            
            {/* Header Stats */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">{farmer.greenCredits}</span>
                <span className="text-sm text-gray-600">Credits</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-gray-900">{farmer.streakDays}</span>
                <span className="text-sm text-gray-600">Day Streak</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowAIOracle(true)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-indigo-700 transition-all flex items-center space-x-2"
              >
                <Brain className="h-4 w-4" />
                <span>Krishi Rishi</span>
              </button>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 flex items-center">
                  <Crown className="h-4 w-4 mr-1 text-yellow-500" />
                  {farmer.title} {farmer.name}
                </p>
                <p className="text-xs text-gray-600 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {farmer.location}
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                {farmer.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: Target },
              { id: 'quests', name: 'My Quests', icon: Zap },
              { id: 'guild', name: 'My Guild', icon: Shield },
              { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
              { id: 'community', name: 'Community', icon: Users },
              { id: 'marketplace', name: 'Mandi', icon: Gift }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* AI Oracle Modal */}
      {showAIOracle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Krishi Rishi AI Oracle</h3>
              </div>
              <button 
                onClick={() => setShowAIOracle(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">🔍 Plant Doctor</h4>
                <p className="text-sm text-purple-700 mb-3">Snap a photo of diseased plants, pests, or weeds for instant identification and treatment quests.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Take Photo</span>
                </button>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">🌱 Crop Advisor</h4>
                <p className="text-sm text-green-700 mb-3">Get personalized farming advice based on your location, season, and crop type.</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Get Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Daily Riddle */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Prakriti Paheli (Nature's Riddle)
                </h3>
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  Daily Challenge
                </div>
              </div>
              <p className="text-indigo-100 mb-4">{dailyRiddle.question}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {dailyRiddle.options.map((option, index) => (
                  <button 
                    key={index}
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-2 text-sm transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="text-xs text-indigo-200">Reward: {dailyRiddle.reward}</p>
            </div>

            {/* Boss Challenge Banner */}
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Bug className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Boss Battle: {bossChallenge.name}</h3>
                    <p className="text-red-100">{bossChallenge.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <span>{bossChallenge.participants} farmers participating</span>
                      <span>⏰ {bossChallenge.timeLeft} left</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{bossChallenge.progress}%</div>
                  <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full mt-2">
                    <div 
                      className="h-3 bg-white rounded-full transition-all duration-500"
                      style={{ width: `${bossChallenge.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Farm Aura Health</p>
                    <p className="text-3xl font-bold text-green-600">{farmer.auraHealth}%</p>
                  </div>
                  <div className={`bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} p-3 rounded-lg`}>
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${farmer.auraHealth}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{farmer.auraHealth}%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Powered by satellite data</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Level & Title</p>
                    <p className="text-2xl font-bold text-blue-600">{farmer.level}</p>
                    <p className="text-xs text-blue-600 font-medium">{farmer.title}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Crown className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{farmer.totalPoints} total points</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Green Credits</p>
                    <p className="text-3xl font-bold text-yellow-600">{farmer.greenCredits}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Coins className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Spend in Mandi</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Guild Rank</p>
                    <p className="text-3xl font-bold text-purple-600">#{guild.rank}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{guild.name}</p>
              </div>
            </div>

            {/* Farm Aura Visualization */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-500" />
                Your Farm's Aura (Satellite View)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Health Indicators</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Vegetation Index</span>
                        <span className="font-medium text-green-600">0.82 (Excellent)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Soil Moisture</span>
                        <span className="font-medium text-blue-600">78% (Good)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Crop Density</span>
                        <span className="font-medium text-emerald-600">High</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Improvement Tips</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Add organic mulch to boost soil health</li>
                      <li>• Consider intercropping with legumes</li>
                      <li>• Optimize irrigation timing</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                      <TreePine className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Farm Aura: {farmer.auraHealth}%</p>
                    <p className="text-sm text-gray-600">Last updated: 2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Recent Achievements & Titles
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {farmer.badges.map((badge, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{badge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guild' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="h-8 w-8 mr-3 text-purple-600" />
                {guild.name}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{guild.logo}</div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">Level {guild.level}</p>
                  <p className="text-sm text-gray-600">{guild.members} members</p>
                </div>
              </div>
            </div>

            {/* Guild Challenge */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Current Guild Challenge</h3>
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  Rank #{guild.rank}
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">{guild.currentChallenge}</h4>
              <p className="text-purple-100 mb-4">Work together to achieve 100% drip irrigation coverage in your village</p>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{guild.progress}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-500"
                      style={{ width: `${guild.progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{guild.progress}%</p>
                  <p className="text-xs text-purple-200">Complete</p>
                </div>
              </div>
            </div>

            {/* Guild Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Active Members</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{guild.members}</div>
                <p className="text-sm text-gray-600">Farmers united</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Guild Level</h3>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{guild.level}</div>
                <p className="text-sm text-gray-600">Collective achievements</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Challenges Won</h3>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <p className="text-sm text-gray-600">This season</p>
              </div>
            </div>

            {/* Guild Chat Preview */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                Guild Chat
              </h3>
              <div className="space-y-3 mb-4">
                {[
                  { name: 'Amit', message: 'Just installed drip system on 2 acres! 💪', time: '2h ago' },
                  { name: 'Sunita', message: 'Great work! I can help with the next plot tomorrow', time: '1h ago' },
                  { name: 'Mohan', message: 'Sharing my neem oil recipe in the knowledge base', time: '30m ago' }
                ].map((chat, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {chat.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{chat.name}</span>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Open Guild Chat
              </button>
            </div>
          </div>
        )}

        {activeTab === 'quests' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Quests</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Updated daily</span>
              </div>
            </div>

            <div className="grid gap-6">
              {quests.map((quest) => (
                <div 
                  key={quest.id} 
                  className={`bg-white rounded-xl shadow-lg border-l-4 p-6 transition-all duration-300 hover:shadow-xl ${
                    quest.completed ? 'border-green-500 bg-green-50' : 
                    quest.type === 'boss' ? 'border-red-500' :
                    quest.type === 'guild' ? 'border-purple-500' : 'border-blue-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{quest.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quest.difficulty)}`}>
                          {quest.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQuestTypeColor(quest.type)}`}>
                          {quest.type === 'boss' ? '👹 Boss' : quest.type === 'guild' ? '🛡️ Guild' : '👤 Solo'}
                        </span>
                        {quest.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{quest.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{quest.category}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{quest.points} points</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {quest.deadline}</span>
                        </div>
                        {quest.reward && (
                          <div className="flex items-center space-x-1">
                            <Gift className="h-4 w-4" />
                            <span>{quest.reward}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{quest.progress}%</div>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(quest.progress)}`}
                          style={{ width: `${quest.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Gift className="h-8 w-8 mr-3 text-yellow-600" />
                Green Credits Mandi
              </h2>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
                {farmer.greenCredits} Credits Available
              </div>
            </div>

            {/* Marketplace Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Real-World Benefits */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Coins className="h-5 w-5 mr-2 text-green-600" />
                  Real-World Benefits
                </h3>
                <div className="space-y-3">
                  {[
                    { item: 'Organic Fertilizer Discount', cost: 200, description: '20% off next purchase' },
                    { item: 'Seed Quality Upgrade', cost: 150, description: 'Premium seeds at regular price' },
                    { item: 'Loan Interest Reduction', cost: 500, description: '0.5% reduction for 6 months' }
                  ].map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{benefit.item}</h4>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {benefit.cost} Credits
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                      <button className="mt-2 w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700 transition-colors">
                        Redeem
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge Unlocks */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  Knowledge Unlocks
                </h3>
                <div className="space-y-3">
                  {[
                    { item: 'Advanced IPM Masterclass', cost: 100, description: 'Expert video series' },
                    { item: 'Soil Testing Guide', cost: 75, description: 'DIY testing methods' },
                    { item: 'Market Price Predictions', cost: 250, description: 'AI-powered insights' }
                  ].map((knowledge, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{knowledge.item}</h4>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                          {knowledge.cost} Credits
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{knowledge.description}</p>
                      <button className="mt-2 w-full bg-purple-600 text-white py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                        Unlock
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Virtual Rewards */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-600" />
                  Virtual Rewards
                </h3>
                <div className="space-y-3">
                  {[
                    { item: 'Premium Avatar Frame', cost: 50, description: 'Golden border for profile' },
                    { item: 'Farm Decoration Pack', cost: 75, description: 'Beautify your virtual farm' },
                    { item: 'Custom Guild Badge', cost: 125, description: 'Design your guild emblem' }
                  ].map((reward, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{reward.item}</h4>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          {reward.cost} Credits
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{reward.description}</p>
                      <button className="mt-2 w-full bg-yellow-600 text-white py-1 rounded text-sm hover:bg-yellow-700 transition-colors">
                        Purchase
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scheme Eligibility Tracker */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                Government Scheme Eligibility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { scheme: 'Solar Pump Subsidy', progress: 85, requirement: 'Sustainability Score: 80+', status: 'Almost Eligible' },
                  { scheme: 'Organic Certification Support', progress: 92, requirement: 'Organic Practices: 90%+', status: 'Eligible' },
                  { scheme: 'Drip Irrigation Subsidy', progress: 67, requirement: 'Water Conservation Score: 70+', status: 'In Progress' },
                  { scheme: 'Crop Insurance Premium Reduction', progress: 78, requirement: 'Risk Management Score: 75+', status: 'Eligible' }
                ].map((scheme, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{scheme.scheme}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        scheme.status === 'Eligible' ? 'bg-green-100 text-green-800' :
                        scheme.status === 'Almost Eligible' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {scheme.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{scheme.requirement}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            scheme.progress >= 90 ? 'bg-green-500' :
                            scheme.progress >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${scheme.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{scheme.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Adarsh Kisan Leaderboard</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Maharashtra Region</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adarsh Kisan Challenge</h3>
                    <p className="text-gray-600">Compete for the title of Model Farmer in your region</p>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {leaderboard.map((entry, index) => (
                  <div 
                    key={entry.rank} 
                    className={`p-6 flex items-center space-x-4 ${
                      entry.name === farmer.name ? 'bg-green-50 border-l-4 border-green-500' : 'hover:bg-gray-50'
                    } transition-colors`}
                  >
                    <div className="text-2xl font-bold text-gray-400 w-8">
                      #{entry.rank}
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                      index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                      'bg-gradient-to-r from-green-400 to-green-600'
                    }`}>
                      {entry.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{entry.name}</h4>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          {entry.title}
                        </span>
                        {entry.guild && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {entry.guild}
                          </span>
                        )}
                        {entry.name === farmer.name && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            You
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {entry.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">{entry.score}</div>
                      <div className="text-sm text-gray-500">points</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Guild Leaderboard */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-purple-500" />
                Panchayat League - Guild Rankings
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Millet Mavericks', members: 32, score: 15420, rank: 1, logo: '🌾' },
                  { name: 'Water Warriors', members: 28, score: 14850, rank: 2, logo: '💧' },
                  { name: 'Basmati Brigade', members: 24, score: 13200, rank: 3, logo: '🌾' },
                  { name: 'Green Guardians', members: 19, score: 12100, rank: 4, logo: '🌱' }
                ].map((guild, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
                    guild.name === farmer.guild ? 'bg-purple-50 border border-purple-200' : 'bg-gray-50'
                  }`}>
                    <div className="text-xl font-bold text-gray-400">#{guild.rank}</div>
                    <div className="text-2xl">{guild.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{guild.name}</h4>
                        {guild.name === farmer.guild && (
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                            Your Guild
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{guild.members} members</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{guild.score}</div>
                      <div className="text-sm text-gray-500">guild points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Knowledge Bartering Hub</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Ask for Help
              </button>
            </div>

            {/* Knowledge Bartering System */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-blue-500" />
                Active Help Requests
              </h3>
              <div className="space-y-4">
                {[
                  { 
                    farmer: 'Priya Sharma', 
                    problem: 'White flies attacking my tomato crop', 
                    location: 'Aurangabad',
                    bids: 3,
                    reward: '50 Guru Points',
                    time: '2 hours ago',
                    image: '🍅'
                  },
                  { 
                    farmer: 'Mohan Singh', 
                    problem: 'Soil pH too alkaline, need organic solutions', 
                    location: 'Nashik',
                    bids: 7,
                    reward: '75 Guru Points',
                    time: '5 hours ago',
                    image: '🌱'
                  },
                  { 
                    farmer: 'Sunita Devi', 
                    problem: 'Best intercropping options for sugarcane', 
                    location: 'Kolhapur',
                    bids: 2,
                    reward: '60 Guru Points',
                    time: '1 day ago',
                    image: '🎋'
                  }
                ].map((request, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{request.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{request.farmer}</h4>
                          <span className="text-sm text-gray-500">• {request.location}</span>
                          <span className="text-sm text-gray-500">• {request.time}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{request.problem}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{request.bids} solutions offered</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                              {request.reward}
                            </span>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Offer Solution
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Gurus */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Top Knowledge Gurus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Dr. Ramesh Patil', guruPoints: 2450, solutions: 89, specialty: 'Organic Pest Control' },
                  { name: 'Kavita Deshmukh', guruPoints: 2100, solutions: 76, specialty: 'Soil Management' },
                  { name: 'Suresh Kumar', guruPoints: 1890, solutions: 65, specialty: 'Water Conservation' }
                ].map((guru, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                      {guru.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{guru.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{guru.specialty}</p>
                    <div className="flex justify-center space-x-4 text-xs text-gray-500">
                      <span>{guru.guruPoints} Guru Points</span>
                      <span>{guru.solutions} Solutions</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Community Impact - Dharti Rakshak Movement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">1,247</div>
                  <p className="text-sm text-gray-600 mt-1">Acres converted to sustainable farming</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">89%</div>
                  <p className="text-sm text-gray-600 mt-1">Reduction in chemical usage</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">324</div>
                  <p className="text-sm text-gray-600 mt-1">Active Dharti Rakshaks</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600">156</div>
                  <p className="text-sm text-gray-600 mt-1">Boss battles won</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;