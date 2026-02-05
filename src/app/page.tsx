'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Sparkles, Bot, Zap, TrendingUp, PieChart } from 'lucide-react';

export default function Home() {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      router.replace('/chat');
    }
  }, [connected, router]);

  return (
    <div className="min-h-screen bg-gaia-space flex flex-col items-center justify-center relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-purple w-[500px] h-[500px] top-20 -left-40 opacity-30" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-20 -right-40 opacity-30" />
      </div>
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-2xl mx-auto animate-fade-in">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-gaia-purple via-gaia-pink to-gaia-cyan rounded-3xl blur-xl opacity-40 animate-glow" />
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-gaia-purple to-gaia-cyan flex items-center justify-center shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Welcome to GAIA</span>
          </h1>
          <p className="text-xl text-gaia-paragraph">
            Your AI-powered Solana assistant with real-time market data, portfolio tracking, and intelligent insights.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 pt-4">
          <div className="flex items-center gap-2 px-6 py-3 glass-purple rounded-xl">
            <Bot className="w-5 h-5 text-gaia-purple" />
            <span className="text-gaia-paragraph">Connect your wallet to get started</span>
          </div>
          
          <div className="scale-125">
            <WalletMultiButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="glass-purple p-4 rounded-xl">
            <TrendingUp className="w-6 h-6 text-gaia-purple mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Real-time Data</h3>
            <p className="text-sm text-gaia-paragraph">Live market prices and trends</p>
          </div>
          <div className="glass-purple p-4 rounded-xl">
            <PieChart className="w-6 h-6 text-gaia-cyan mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Portfolio Sync</h3>
            <p className="text-sm text-gaia-paragraph">Track your holdings</p>
          </div>
          <div className="glass-purple p-4 rounded-xl">
            <Zap className="w-6 h-6 text-gaia-pink mx-auto mb-2" />
            <h3 className="font-semibold mb-1">AI Powered</h3>
            <p className="text-sm text-gaia-paragraph">Smart insights and analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
