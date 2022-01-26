#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCymotiveStack } from '../lib/aws-cymotive-stack';

const app = new cdk.App();
new AwsCymotiveStack(app, 'AwsCymotiveStack');
