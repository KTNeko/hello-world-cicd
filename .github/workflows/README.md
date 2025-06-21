# GitHub Actions Workflows

このプロジェクトには3つのワークフローが設定されています。

## ワークフロー一覧

### 1. PR Workflow (`pr_workflow.yaml`)
**トリガー**: Pull Request to `main` branch
**目的**: PRの品質チェック

**実行内容**:
- 依存関係のインストール
- コードのリンティング
- 型チェック
- ユニットテスト
- ビルド
- 成果物のアップロード

### 2. Push Workflow (`push_workflow.yaml`)
**トリガー**: Push to `main` or `develop` branch
**目的**: 本番/開発環境へのデプロイ準備

**実行内容**:
- 基本的なテストとビルド
- デプロイ用パッケージの作成
- 成果物のアップロード（30日間保持）

### 3. Develop Workflow (`develop_workflow.yaml`)
**トリガー**: Push to `develop` branch
**目的**: 開発環境での詳細テスト

**実行内容**:
- カバレッジ付きテスト
- セキュリティ監査
- テストカバレッジのアップロード

## ワークフローの使い分け

```
開発フロー:
1. feature branch → develop branch (Develop Workflow)
2. develop branch → main branch (Push Workflow)

PRフロー:
1. feature branch → main branch (PR Workflow)
```

## 成果物

各ワークフローで以下の成果物が生成されます：

- `build-files`: ビルド成果物（7日間保持）
- `deployment-package`: デプロイ用パッケージ（30日間保持）
- `test-coverage`: テストカバレッジ結果（30日間保持）

## ローカルでのテスト

ワークフローをローカルでテストする場合：

```bash
npm install
npm run lint
npm run type-check
npm test
npm run build
```

## プロジェクト構成

```
hello-world-cicd/
├── src/                  # ソースコード
├── __tests__/           # テストファイル
├── package.json         # 依存関係とスクリプト
├── tsconfig.json        # TypeScript設定
├── .eslintrc.js         # ESLint設定
├── .prettierrc          # Prettier設定
├── .github/workflows/   # GitHub Actionsワークフロー
└── README.md            # プロジェクト説明
``` 