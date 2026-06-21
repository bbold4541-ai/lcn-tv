"use client";

import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("LCN TV Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
          <div className="glass rounded-2xl p-8 border border-red-500/20 text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Алдаа гарлаа</h2>
            <p className="text-gray-400 mb-6">Уучлаарай, технологийн алдаа гарлаа. Дахин оролдоно уу.</p>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-6 py-3 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-xl hover:bg-gold-500/30 transition-all mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Дахин ачаалах</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
